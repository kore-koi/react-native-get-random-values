//
//  GdkHostObject.cpp
//  react-native-gdk
//
//  Created by Mattia Ferrari on 04/02/24.
//

#include "GetRandomValuesHostObject.hpp"
#include "TypedArray.hpp"
#include "sodium.h"
#include "utils.hpp"

enum ArrayType
{
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array
};

GetRandomValuesHostObject::GetRandomValuesHostObject() {}

std::vector<jsi::PropNameID> GetRandomValuesHostObject::getPropertyNames(jsi::Runtime& rt) {
    std::vector<jsi::PropNameID> result;
    result.push_back(jsi::PropNameID::forUtf8(rt, std::string("getRandomValues")));

    return result;
}


jsi::Value GetRandomValuesHostObject::get(jsi::Runtime& runtime, const jsi::PropNameID& propNameId) {
    auto propName = propNameId.utf8(runtime);
    auto funcName = "getRandomValues." + propName;
    
    
    if (propName == "getRandomValues") {
        return jsi::Function::createFromHostFunction(runtime,
                                                         jsi::PropNameID::forAscii(runtime, funcName),
                                                         2,
                                                         [this](jsi::Runtime& runtime,
                                                                const jsi::Value& thisValue,
                                                                const jsi::Value* arguments,
                                                                size_t count) -> jsi::Value {
            
            jsi::Object arrayObject = arguments[0].getObject(runtime);
            int arrayType = (int) (arguments[1].getNumber());
            
            switch (arrayType) {
                case ArrayType::Int8Array:
                    return utils::formatInt8Array(arrayObject, runtime);
                    break;
                case ArrayType::Uint8Array:
                    return utils::formatUInt8Array(arrayObject, runtime);
                    break;
                case ArrayType::Int16Array:
                    return utils::formatInt16Array(arrayObject, runtime);
                    break;
                case ArrayType::Uint16Array:
                    return utils::formatUInt16Array(arrayObject, runtime);
                    break;
                case ArrayType::Int32Array:
                    return utils::formatInt32Array(arrayObject, runtime);
                    break;
                case ArrayType::Uint32Array:
                    return utils::formatUInt32Array(arrayObject, runtime);
                    break;
                case ArrayType::Uint8ClampedArray:
                    return utils::formatUInt8TypedArray(arrayObject, runtime);
                    break;
                default:
                    throw new jsi::JSError(runtime, "Wrong array type passed as parameter");
                    break;
            }
            
            return jsi::Value::undefined();
        });

    }
    


    return jsi::Value::undefined();
}
