
const TrustSection = () => {
  const logos = [
    { 
      name: "Harvard University", 
      width: "w-32",
      src: "https://logos-world.net/wp-content/uploads/2020/12/Harvard-Logo.png"
    },
    { 
      name: "Stanford", 
      width: "w-28",
      src: "https://logos-world.net/wp-content/uploads/2020/06/Stanford-Logo.png"
    },
    { 
      name: "MIT", 
      width: "w-24",
      src: "https://logos-world.net/wp-content/uploads/2020/06/MIT-Logo.png"
    },
    { 
      name: "Google", 
      width: "w-28",
      src: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png"
    },
    { 
      name: "Microsoft", 
      width: "w-32",
      src: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png"
    },
    { 
      name: "Apple", 
      width: "w-24",
      src: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png"
    },
    { 
      name: "Tesla", 
      width: "w-28",
      src: "https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo.png"
    },
    { 
      name: "Amazon", 
      width: "w-32",
      src: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
    },
    { 
      name: "IBM", 
      width: "w-20",
      src: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png"
    },
    { 
      name: "Oracle", 
      width: "w-28",
      src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png"
    },
    { 
      name: "Salesforce", 
      width: "w-32",
      src: "https://logos-world.net/wp-content/uploads/2021/08/Salesforce-Logo.png"
    },
    { 
      name: "Meta", 
      width: "w-24",
      src: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png"
    }
  ];

  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            They Trust Us
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Leading organizations worldwide rely on our AI architecture solutions
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className={`flex-shrink-0 mx-8 ${logo.width} h-16 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm p-4`}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className={`flex-shrink-0 mx-8 ${logo.width} h-16 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm p-4`}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
