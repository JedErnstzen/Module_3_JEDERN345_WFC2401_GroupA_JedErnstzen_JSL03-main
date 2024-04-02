function cookSteak(steakWeight, desiredDoneness) {
    const grillTemperatureCelsius = 204; 
    const seasoning = 'Salt and Pepper';
  
    // Define the cooking process
    const cookingProcess = [
      { action: 'Preheat grill', temperature: grillTemperatureCelsius },
      { action: 'Season steak', seasoning },
      { action: 'Cook steak until desired doneness', desiredDoneness },
      { action: 'Serve steak' }
    ];
  
    // Execute the cooking process
    for (const step of cookingProcess) {
      switch (step.action) {
        case 'Preheat grill':
          console.log(`Preheating grill to ${step.temperature}°C`); // Display temperature in Celsius
          break;
        case 'Season steak':
          console.log(`Seasoning the steak with ${step.seasoning}`);
          break;
        case 'Cook steak until desired doneness':
          console.log(`Cooking steak to ${step.desiredDoneness}°C`); // Display temperature in Celsius
          break;
        case 'Serve steak':
          console.log('Steak is ready to serve!');
          break;
        default:
          console.log('Invalid step in the cooking process.');
      }
    }
  }
  
  cookSteak(16, 63); // Cook a 16 oz steak to medium-rare (63°C)
  