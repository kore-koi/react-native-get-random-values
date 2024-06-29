#pragma once
#include <jsi/jsi.h>
#include <vector>
#include "TypedArray.hpp"
#include "sodium.h"

using namespace facebook;

namespace utils {
    std::unique_ptr<unsigned char[]> generateByteArray(size_t length);
    
    TypedArray<TypedArrayKind::Int32Array> formatInt32Array(jsi::Object &rawObject, jsi::Runtime &runtime);
    TypedArray<TypedArrayKind::Uint32Array> formatUInt32Array(jsi::Object &rawObject, jsi::Runtime &runtime);

    TypedArray<TypedArrayKind::Uint8Array> formatUInt8Array(jsi::Object &rawObject, jsi::Runtime &runtime);
    TypedArray<TypedArrayKind::Int8Array> formatInt8Array(jsi::Object &rawObject, jsi::Runtime &runtime);

    TypedArray<TypedArrayKind::Int16Array> formatInt16Array(jsi::Object &rawObject, jsi::Runtime &runtime);
    TypedArray<TypedArrayKind::Uint16Array> formatUInt16Array(jsi::Object &rawObject, jsi::Runtime &runtime);

    TypedArray<TypedArrayKind::Uint8ClampedArray> formatUInt8TypedArray(jsi::Object &rawObject, jsi::Runtime &runtime);

}
