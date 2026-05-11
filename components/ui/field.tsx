import * as React from "react"
import { cn } from "@/lib/utils"

const Field = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        "data-invalid"?: boolean
        "data-slot"?: string
        orientation?: "horizontal" | "vertical" | "responsive"
    }
>(
    (
        {
            className,
            "data-invalid": dataInvalid,
            "data-slot": dataSlot,
            orientation = "vertical",
            ...props
        },
        ref
    ) => (
        <div
            ref={ref}
            className={cn(
                "flex",
                orientation === "horizontal" && "flex-row items-center gap-3",
                orientation === "vertical" && "flex-col gap-1.5",
                orientation === "responsive" && "flex-col lg:flex-row lg:items-center lg:gap-3",
                className
            )}
            data-invalid={dataInvalid}
            data-slot={dataSlot}
            {...props}
        />
    )
)
Field.displayName = "Field"

const FieldContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
    />
))
FieldContent.displayName = "FieldContent"

const FieldGroup = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        "data-slot"?: string
    }
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("space-y-3", className)}
        {...props}
    />
))
FieldGroup.displayName = "FieldGroup"

const FieldLabel = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
        {...props}
    />
))
FieldLabel.displayName = "FieldLabel"

const FieldDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        errors?: Array<{ message?: string } | undefined> | null
    }
>(({ className, errors, children, ...props }, ref) => {
    if (!errors || errors.length === 0 || !errors[0]) return null

    return (
        <div
            ref={ref}
            className={cn("text-sm font-medium text-destructive", className)}
            {...props}
        >
            {errors[0]?.message || children}
        </div>
    )
})
FieldError.displayName = "FieldError"

const FieldSet = React.forwardRef<
    HTMLFieldSetElement,
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
    <fieldset
        ref={ref}
        className={cn("space-y-3", className)}
        {...props}
    />
))
FieldSet.displayName = "FieldSet"

const FieldLegend = React.forwardRef<
    HTMLLegendElement,
    React.HTMLAttributes<HTMLLegendElement> & {
        variant?: "label" | "heading"
    }
>(({ className, variant = "heading", ...props }, ref) => (
    <legend
        ref={ref}
        className={cn(
            variant === "label" && "text-sm font-medium",
            variant === "heading" && "text-lg font-semibold",
            className
        )}
        {...props}
    />
))
FieldLegend.displayName = "FieldLegend"

const FieldTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm font-medium", className)}
        {...props}
    />
))
FieldTitle.displayName = "FieldTitle"

export {
    Field,
    FieldContent,
    FieldGroup,
    FieldLabel,
    FieldDescription,
    FieldError,
    FieldSet,
    FieldLegend,
    FieldTitle,
}
