import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.location.href = 'mailto:madhansmk1697@gmail.com';
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-lg text-gray-600">Redirecting to email...</p>
    </div>
  );
};

export default Contact;
