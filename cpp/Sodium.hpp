//
//  Test.hpp
//  react-native-get-random-values
//
//  Created by Mattia Ferrari on 24/09/24.
//

#ifndef Test_hpp
#define Test_hpp

#if __has_include(<NitroModules/HybridObject.hpp>)
#include <NitroModules/HybridObject.hpp>
#else
#error NitroModules cannot be found! Are you sure you installed NitroModules properly?
#endif


//namespace margelo::nitro::test {
using namespace margelo::nitro;

class Sodium: public HybridObject {
    public:
      // Constructor
      explicit Sodium();

      // Destructor
      virtual ~Sodium() { }

    public:
      // Methods
      void getRandomValues(const std::shared_ptr<ArrayBuffer>& buffer);

    protected:
      // Hybrid Setup
      void loadHybridMethods() override;

    protected:
      // Tag for logging
      static constexpr auto TAG = "Sodium";
  };

//}

#endif /* Test_hpp */

