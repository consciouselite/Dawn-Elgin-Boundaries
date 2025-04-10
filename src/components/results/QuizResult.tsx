import { motion } from 'framer-motion';
import { Share2, Facebook, Linkedin, MessageCircle, X } from 'lucide-react';
import { PersonalityType, UserData } from '../../types/quiz';
import { ConfidenceTips } from './ConfidenceTips';
import { useState, useEffect } from 'react';

interface QuizResultProps {
  result: PersonalityType;
  userData: UserData;
  score: number;
  coachImage?: string;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, userData, score, coachImage }) => {
  const maxScore = 45; // Based on 9 questions with max score of 5 each
  const confidencePercentage = (score / maxScore) * 100;
  const [shareMessage, setShareMessage] = useState<string | null>(null);
  const [shareImageUrl, setShareImageUrl] = useState<string>('');
  
  // Get emoji based on score
  const getScoreEmoji = () => {
    if (confidencePercentage >= 80) return '🤩'; // Star-struck for high scores
    if (confidencePercentage >= 60) return '😊'; // Smiling for good scores
    if (confidencePercentage >= 40) return '🙂'; // Slightly smiling for medium scores
    if (confidencePercentage >= 20) return '😐'; // Neutral for low scores
    return '🤔'; // Thinking for very low scores
  };
  
  // Format text to handle markdown-style formatting
  const formatText = (text: string) => {
    // Replace markdown-style formatting with HTML tags
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };
  
  // Create a default share image if there's no result image
  useEffect(() => {
    // Use result image if available, otherwise use a default image
    const imageUrl = result.image || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80';
    setShareImageUrl(imageUrl);
    
    // Add Open Graph meta tags dynamically for better social sharing
    updateMetaTags();
    
    return () => {
      // Clean up meta tags when component unmounts
      removeMetaTags();
    };
  }, [result, userData, confidencePercentage]);
  
  // Update meta tags for better social media sharing
  const updateMetaTags = () => {
    // Remove any existing OG tags first
    removeMetaTags();
    
    // Create and add meta tags
    const metaTags = [
      { property: 'og:title', content: `${userData.firstName}'s Boundary Quiz Score: ${confidencePercentage.toFixed(0)}%` },
      { property: 'og:description', content: `${userData.firstName} is a ${result.type}. Take the quiz to discover your boundary style!` },
      { property: 'og:image', content: shareImageUrl },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ];
    
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value);
      });
      document.head.appendChild(meta);
    });
  };
  
  // Remove meta tags
  const removeMetaTags = () => {
    const ogTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
    ogTags.forEach(tag => tag.remove());
  };
  
  // Share URL with UTM parameters for tracking
  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}?utm_source=share&utm_medium=social&utm_campaign=boundary_quiz&utm_content=${userData.firstName}`;
  };
  
  // Create share text with the user's name and result
  const getShareText = () => {
    return `${getScoreEmoji()} I just discovered I'm a "${result.type}" when it comes to boundaries! My score: ${confidencePercentage.toFixed(0)}%. What's your boundary style? Take this quick quiz! #BoundaryQuiz`;
  };
  
  // Generate a shareable card image URL (in a real app, this would be a server endpoint)
  const getCardImageUrl = () => {
    // This simulates a shareable card URL - in a real app this would be a server endpoint
    // that generates a proper social card image with the user's results
    return `${shareImageUrl}?name=${encodeURIComponent(userData.firstName)}&score=${confidencePercentage.toFixed(0)}&type=${encodeURIComponent(result.type)}`;
  };
  
  // Sharing functions
  const shareToFacebook = () => {
    // Facebook prefers to use their own scraper to get the image from OG tags
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`;
    window.open(url, '_blank', 'width=600,height=400');
    showShareMessage();
  };
  
  const shareToX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}&url=${encodeURIComponent(getShareUrl())}`;
    window.open(url, '_blank', 'width=600,height=400');
    showShareMessage();
  };
  
  const shareToLinkedin = () => {
    // LinkedIn prefers just the URL and will scrape the OG tags
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getShareUrl())}`;
    window.open(url, '_blank', 'width=600,height=400');
    showShareMessage();
  };
  
  const shareToWhatsapp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${getShareText()} ${getShareUrl()}`)}`;
    window.open(url, '_blank', 'width=600,height=400');
    showShareMessage();
  };
  
  const shareGeneral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${userData.firstName}'s Boundary Quiz Results`,
          text: getShareText(),
          url: getShareUrl(),
        });
        showShareMessage();
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(`${getShareText()} ${getShareUrl()}`);
      setShareMessage('Link copied to clipboard!');
      setTimeout(() => setShareMessage(null), 3000);
    }
  };
  
  const showShareMessage = () => {
    setShareMessage('Thanks for sharing! 🎉');
    setTimeout(() => setShareMessage(null), 3000);
  };
  
  return (
    <motion.div
      className="result-card w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >      
      {/* Hero section with image and result type */}
      <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img
          src={result.image}
          alt={result.type}
          className="w-full h-72 sm:h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-20 text-white">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-primary-600 text-white py-1.5 px-4 rounded-full text-sm font-semibold inline-flex items-center shadow-md">
              {confidencePercentage.toFixed(0)}% {getScoreEmoji()}
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 font-heading drop-shadow-md tracking-tight">
            {userData.firstName}, You're a <span className="text-primary-300">{result.type}</span>
          </h2>
          <div className="w-20 h-1 bg-primary-400 rounded opacity-80 mt-3"></div>
        </div>
      </div>
      
      {/* Result description */}
      <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8 border border-secondary-100">
        <div className="rich-text text-secondary-950 text-base sm:text-lg leading-relaxed font-body">
          <div dangerouslySetInnerHTML={{ __html: formatText(result.description) }} />
        </div>
      </div>
      
      {/* Boundary tips */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-secondary-950 mb-5 font-heading">
          Your Personalized Boundary Tips
          <div className="w-16 h-1 bg-primary-500 rounded mt-2"></div>
        </h3>
        <ConfidenceTips tips={result.tips} />
      </div>
      
      {/* Share section */}
      <div className="mt-10 p-6 sm:p-8 bg-secondary-50 rounded-xl shadow-sm border border-secondary-100">
        <h3 className="font-bold text-xl sm:text-2xl text-secondary-950 font-heading text-center mb-3">Share Your Results</h3>
        <p className="text-secondary-900 text-center font-body mb-6">
          Let your friends discover their boundary style too!
        </p>
        
        {shareMessage && (
          <motion.div 
            className="bg-success-100 text-success-700 p-3 rounded-lg text-center mb-5 font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {shareMessage}
          </motion.div>
        )}
        
        <div className="flex flex-wrap justify-center gap-5">
          <button 
            onClick={shareToFacebook}
            aria-label="Share to Facebook"
            className="share-button text-white bg-[#1877F2] hover:bg-[#0E6EDE] transform hover:scale-105 transition-all p-3.5 rounded-full shadow-sm"
          >
            <Facebook size={22} />
          </button>
          <button 
            onClick={shareToX}
            aria-label="Share to X"
            className="share-button text-white bg-black hover:bg-gray-800 transform hover:scale-105 transition-all p-3.5 rounded-full shadow-sm"
          >
            <X size={22} />
          </button>
          <button 
            onClick={shareToLinkedin}
            aria-label="Share to LinkedIn"
            className="share-button text-white bg-[#0A66C2] hover:bg-[#084E96] transform hover:scale-105 transition-all p-3.5 rounded-full shadow-sm"
          >
            <Linkedin size={22} />
          </button>
          <button 
            onClick={shareToWhatsapp}
            aria-label="Share via WhatsApp"
            className="share-button text-white bg-[#25D366] hover:bg-[#1DB354] transform hover:scale-105 transition-all p-3.5 rounded-full shadow-sm"
          >
            <MessageCircle size={22} />
          </button>
          <button 
            onClick={shareGeneral}
            aria-label="Share via other methods"
            className="share-button text-white bg-secondary-600 hover:bg-secondary-700 transform hover:scale-105 transition-all p-3.5 rounded-full shadow-sm"
          >
            <Share2 size={22} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Add default export for better compatibility
export default QuizResult;