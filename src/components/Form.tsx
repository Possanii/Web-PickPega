import * as RdxForm from "@radix-ui/react-form";
import { cn } from "../app/utils/cn";
import { Button } from "./Button";

interface FormRootProps {
  /**
   * A react component you want to insert into the form.
   */
  children: React.ReactNode;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * A function that you want to call when the form is submitted.
   * @param event
   */
  onSubmit?(event: React.FormEvent<HTMLFormElement>): void;
}

function FormRoot({ children, className, onSubmit }: FormRootProps) {
  return (
    <RdxForm.Root
      onSubmit={onSubmit}
      className={cn(
        "flex flex-col justify-center items-center w-full",
        className
      )}
    >
      {children}
    </RdxForm.Root>
  );
}

interface FormFieldProps {
  /**
   * A react component you want to insert into the form field.
   */
  children: React.ReactNode;
  /**
   * A string that represents the field request.
   */
  name: string;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

function FormField({ name, children, className }: FormFieldProps) {
  return (
    <RdxForm.Field
      name={name}
      className={cn("grid w-full mb-[10px]", className)}
    >
      {children}
    </RdxForm.Field>
  );
}

interface FormLabelProps {
  /**
   * A string you want to show.
   */
  text: string;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

function FormLabel({ text, className }: FormLabelProps) {
  return (
    <RdxForm.Label
      className={cn(
        "text-[15px] font-medium leading-[35px] text-black",
        className
      )}
    >
      {text}
    </RdxForm.Label>
  );
}

interface FormControlProps {
  /**
   * A react component you want to insert into the control group.
   */
  children: React.ReactNode;
  /**
   * A boolean indicating that will not render a default DOM element, instead cloning the part's child and passing it the props and behavior required to make it functional.
   */
  asChild?: boolean;
}

function FormControl({ asChild = false, children }: FormControlProps) {
  return <RdxForm.Control asChild={asChild}>{children}</RdxForm.Control>;
}

interface FormMessageProps {
  /**
   * A string you want to show on error.
   */
  text: string;
  /**
   * A type of error you want to avoid.
   */
  match:
    | "badInput"
    | "patternMismatch"
    | "rangeOverflow"
    | "rangeUnderflow"
    | "stepMismatch"
    | "tooLong"
    | "tooShort"
    | "typeMismatch"
    | "valid"
    | "valueMissing"
    | ((value: string, formData: FormData) => boolean)
    | ((value: string, formData: FormData) => Promise<boolean>);
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

function FormMessage({ text, match, className }: FormMessageProps) {
  return (
    <RdxForm.Message
      className={cn("mt-2 text-base text-red-500 opacity-[0.6]", className)}
      match={match}
    >
      {text}
    </RdxForm.Message>
  );
}

interface FormSubmitProps {
  /**
   * A string you want to show in button.
   */
  text: string;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * A button type you want to use.
   */
  type?: "button" | "submit" | "reset" | undefined;
}

function FormSubmit({ text, type, className }: FormSubmitProps) {
  return (
    <RdxForm.Submit asChild>
      <Button text={text} type={type} className={className} />
    </RdxForm.Submit>
  );
}

export const Form = {
  Root: FormRoot,
  Field: FormField,
  Label: FormLabel,
  Control: FormControl,
  Message: FormMessage,
  Submit: FormSubmit,
};
