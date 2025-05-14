import { cn } from "@/lib/utils";
import * as LabelPrimitive from "@rn-primitives/label";
import React from "react";
import { Text } from "react-native";

const Label = React.forwardRef<
  LabelPrimitive.TextRef,
  LabelPrimitive.TextProps
>(({ className, children, ...props }, ref) => {
  return (
    <LabelPrimitive.Root>
      <Text
        ref={ref}
        className={cn(
          "text-base font-medium leading-none text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Text>
    </LabelPrimitive.Root>
  );
});

Label.displayName = "Label";
export { Label };
