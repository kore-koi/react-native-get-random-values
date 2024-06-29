#pragma once
#include <jsi/jsi.h>
#include <vector>

using namespace facebook;

class JSI_EXPORT GetRandomValuesHostObject: public jsi::HostObject {
public:
  GetRandomValuesHostObject();
  jsi::Value get(jsi::Runtime&, const jsi::PropNameID& name) override;
  std::vector<jsi::PropNameID> getPropertyNames(jsi::Runtime& rt) override;
private:
  std::string sessionDirectoryUrl;

};
