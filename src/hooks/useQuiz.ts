import { useState } from 'react';
import { QuizState, PersonalityType, UserData, OnboardingData, Question } from '../types/quiz';
import { scoreProfiles } from '../data/scoreQuizData';
import { boundaryProfiles } from '../data/boundaryQuizData';
import { quizService } from '../services/quiz.service';

export const useQuiz = (quizType: 'somatic' | 'boundary' = 'somatic') => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<PersonalityType | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (score: number) => {
    const newAnswers = [...state.answers, score];
    setState(prev => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === (quizType === 'boundary' ? 8 : 11) ? 'form' : 'questions'
    }));
  };

  const calculateResult = (questions: Question[]) => {
    // Calculate score with consideration for reverse scoring
    const totalScore = state.answers.reduce((sum, score, index) => {
      if (index < questions.length && questions[index].reverseScoring) {
        // For reverse scoring, we invert the score (1 becomes 5, 2 becomes 4, etc.)
        return sum + (6 - score);
      }
      return sum + score;
    }, 0);

    const profiles = quizType === 'boundary' ? boundaryProfiles : scoreProfiles;
    const profile = profiles.find(
      p => totalScore >= p.scoreRange.min && totalScore <= p.scoreRange.max
    ) || profiles[0];
    
    return { score: totalScore, profile };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState(prev => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState(prev => {
      const steps: QuizState['step'][] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>, questions: Question[]) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData: UserData = {
        ...userData,
        ...state.onboardingData,
        ...formData
      };

      const { score, profile } = calculateResult(questions);
      setResult(profile);
      setTotalScore(score);

      await quizService.saveQuizResults(
        fullUserData,
        score,
        profile.type,
        state.answers
      );

      setState(prev => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error submitting quiz:', err);
      setError('Failed to save quiz results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
    totalScore,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  };
};