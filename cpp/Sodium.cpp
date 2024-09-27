//
//  Test.cpp
//  react-native-get-random-values
//
//  Created by Mattia Ferrari on 24/09/24.
//

#include "Sodium.hpp"
#include "sodium.h"

Sodium::Sodium(): HybridObject(Sodium::TAG) {
  sodium_init();
}

void Sodium::loadHybridMethods() {
    // load base methods/properties
    HybridObject::loadHybridMethods();
    // load custom methods/properties
    registerHybrids(this, [](Prototype& prototype) {
      prototype.registerHybridMethod("getRandomValues", &Sodium::getRandomValues);
    });
  }

void Sodium::getRandomValues(const std::shared_ptr<ArrayBuffer>& buffer) {
  uint8_t* data = buffer.get()->data();
  if (data == nullptr) {
    throw new std::runtime_error("ArrayBuffer is already deleted");
  }
  size_t arraySize = buffer->size();
  randombytes_buf(data, arraySize);
}

