import { AnimatePresence } from 'framer-motion';
import { QuizProgress } from './components/QuizProgress';
import { QuizQuestion } from './components/QuizQuestion';
import { LeadForm } from './components/LeadForm';
import QuizResult from './components/results/QuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { boundaryQuestions, quizTitle, quizSubtitle } from './data/boundaryQuizData';
import { useQuiz } from './hooks/useQuiz';
import './styles/index.css';

// Get coach profile image from CSS variable
const COACH_PROFILE_IMAGE = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Dawn%20Elgin%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0Rhd24gRWxnaW4gUFAucG5nIiwiaWF0IjoxNzQzNTE2MjkzLCJleHAiOjE3NzUwNTIyOTN9.ZnB8ZrwEO2kpyvgdAydIl-kEvjFdZgtwk6iBmsGu2rg";

// Default image for when gender is not yet selected
const DEFAULT_QUIZ_IMAGE = "https://images.unsplash.com/photo-1573878737226-4f9572c22b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

function App() {
  const {
    state,
    userData,
    result,
    totalScore,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  } = useQuiz('boundary');

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  // Function to process text for markdown-style formatting
  const formatText = (text: string) => {
    // Replace markdown-style formatting with HTML tags
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  // Function to shuffle the order of options in questions
  const shuffleOptions = (question: any) => {
    // If the question is already processed, return it as is
    if (question.optionsShuffled) return question;
    
    // Make a deep copy of options
    const options = [...question.options];
    
    // Shuffle the options
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Return the question with shuffled options
    return {
      ...question,
      options,
      optionsShuffled: true
    };
  };

  return (
    <div className="min-h-screen bg-secondary-200 py-12 px-4">
      <div className="quiz-container">
        {state.step !== 'welcome' && (
          <img
            src={COACH_PROFILE_IMAGE}
            alt="Coach Dawn Elgin"
            className="coach-image w-16 h-16 sm:w-20 sm:h-20"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen 
              key="welcome" 
              onStart={nextStep} 
              userData={state.onboardingData}
              setUserData={updateOnboarding}
            />
          )}
          
          {state.step === 'form' && (
            <h2 key="form-title" className="text-2xl font-bold text-primary-600 mb-4 font-heading">Where should we send you your results?</h2>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 key="quiz-title" className="quiz-title">{quizTitle}</h1>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p key="quiz-subtitle" className="quiz-subtitle">
              <span className="rich-text" dangerouslySetInnerHTML={{ __html: formatText(quizSubtitle) }} />
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              key="name-input"
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              key="gender-select"
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              key="age-select"
              value={state.onboardingData.ageGroup}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
              gender={state.onboardingData.gender}
            />
          )}

          {state.step === 'questions' && (
            <div key="questions-container">
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={boundaryQuestions.length}
              />
              <QuizQuestion
                key={`question-${state.currentQuestion}`}
                question={shuffleOptions({
                  ...boundaryQuestions[state.currentQuestion],
                  text: boundaryQuestions[state.currentQuestion].text.replace(
                    '{firstName}',
                    state.onboardingData.firstName
                  )
                })}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </div>
          )}

          {state.step === 'form' && (
            <LeadForm
              key="lead-form"
              userData={{
                ...userData,
                firstName: state.onboardingData.firstName,
                gender: state.onboardingData.gender,
                ageGroup: state.onboardingData.ageGroup
              }}
              onSubmit={(formData) => handleFormSubmit(formData, boundaryQuestions)}
              onChange={handleFormChange}
            />
          )}

          {state.step === 'result' && result && (
            <QuizResult
              key="quiz-result"
              result={{
                ...result,
                description: result.description.replace(
                  '{firstName}',
                  state.onboardingData.firstName
                )
              }}
              userData={{
                ...userData,
                firstName: state.onboardingData.firstName,
                gender: state.onboardingData.gender,
                ageGroup: state.onboardingData.ageGroup
              }}
              score={totalScore}
              coachImage={COACH_PROFILE_IMAGE}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;