import React from 'react';

// A checkmark icon component for reuse
const CheckIcon: React.FC = () => (
  <svg className="mr-2 h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9 12l2 2 4-4" />
  </svg>
);

 export const PricingSection: React.FC = () => {
  const basicFeatures = [
    '2 Hour Photo Session',
    '50 Digital Images',
    'Online Gallery',
    'Basic Editing',
  ];

  const premiumFeatures = [
    '4 Hour Photo Session',
    '100 Digital Images',
    'Online Gallery',
    'Advanced Editing',
    'Print Release',
  ];

  const professionalFeatures = [
    'Full Day Coverage',
    'Unlimited Images',
    'Premium Online Gallery',
    'Premium Editing',
    'Photo Album',
  ];

  const PricingCard: React.FC<{
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    priceSize: string; // Tailwind class for price text size
  }> = ({ title, price, features, isPopular = false, priceSize }) => (
    <div className={`relative p-6 rounded-xl transition-all duration-300 ${
      isPopular 
        ? 'bg-violet-900/20 backdrop-blur-lg border-2 border-violet-500 hover:transform hover:-translate-y-2' 
        : 'bg-[#1A1A1A] border-gray-800'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
        <div className="mt-4 text-center">
          <span className={`${priceSize} text-violet-400 font-bold`}>
            Rs.{price}
          </span>
          <span className="text-gray-400">/session</span>
        </div>
      </div>
      <div className="mt-6">
        <ul className="mb-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <CheckIcon />
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>
        <span
          className="cursor-pointer w-full block py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Choose Plan
        </span>
      </div>
    </div>
  );

  return (
    <div id="pricing" className="py-20 md:px-20 lg:px-20 bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12 text-center">
          <h3 className="text-purple-400">Pricing Plans</h3>
          <h2 className="text-white text-[30px] font-bold">
            Choose Your Perfect Package
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Select from our carefully curated photography packages designed to
            meet your specific needs and budget.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <PricingCard
            title="Basic Package"
            price="499"
            features={basicFeatures}
            priceSize="text-4xl"
          />

          <PricingCard
            title="Premium Package"
            price="899"
            features={premiumFeatures}
            isPopular={true}
            priceSize="text-4xl"
          />

          <PricingCard
            title="Professional Package"
            price="1499"
            features={professionalFeatures}
            priceSize="text-3xl"
          />

        </div>
      </div>
    </div>
  );
};
