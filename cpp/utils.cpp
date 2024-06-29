//
//  utils.cpp
//  react-native-get-random-values
//
//  Created by Mattia Ferrari on 28/06/24.
//

#include "utils.hpp"

std::unique_ptr<unsigned char[]> utils::generateByteArray(size_t length) {
    std::unique_ptr<unsigned char[]> buffer(new unsigned char[length]);
    randombytes_buf(buffer.get(), length);
    return buffer;
}


// int8
TypedArray<TypedArrayKind::Uint8Array> utils::formatUInt8Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Uint8Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<uint8_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        uint8_t value;
        std::memcpy(&value, buffer.get(), sizeof(uint8_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

TypedArray<TypedArrayKind::Int8Array> utils::formatInt8Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Int8Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<int8_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        int8_t value;
        std::memcpy(&value, buffer.get(), sizeof(int8_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

// int16
TypedArray<TypedArrayKind::Int16Array> utils::formatInt16Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Int16Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<int16_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        int16_t value;
        std::memcpy(&value, buffer.get(), sizeof(int16_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

TypedArray<TypedArrayKind::Uint16Array> utils::formatUInt16Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Uint16Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<uint16_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        uint16_t value;
        std::memcpy(&value, buffer.get(), sizeof(uint16_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

// int32
TypedArray<TypedArrayKind::Int32Array> utils::formatInt32Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Int32Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<int32_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        int32_t value;
        std::memcpy(&value, buffer.get(), sizeof(int32_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

TypedArray<TypedArrayKind::Uint32Array> utils::formatUInt32Array(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Uint32Array> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<uint32_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        uint32_t value;
        std::memcpy(&value, buffer.get(), sizeof(uint32_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}

// clamped uint8

TypedArray<TypedArrayKind::Uint8ClampedArray> utils::formatUInt8TypedArray(jsi::Object &rawObject, jsi::Runtime &runtime) {
    TypedArrayBase base = TypedArrayBase(runtime, rawObject);
    TypedArray<TypedArrayKind::Uint8ClampedArray> array(std::move(base));
    size_t size = array.size(runtime);
    std::vector<uint8_t> toUpdate(size);
    
    for (int i = 0; i < size; i++) {
        auto buffer = utils::generateByteArray(size);
        uint8_t value;
        std::memcpy(&value, buffer.get(), sizeof(uint8_t));
        toUpdate[i] = value;
    }
    array.update(runtime, toUpdate);
    return array;
}
