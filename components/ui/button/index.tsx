'use client';
import React from 'react';
import { createButton } from '@gluestack-ui/button';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import {
  withStyleContext,
  useStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
import { cssInterop } from 'nativewind';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/icon';

const SCOPE = 'BUTTON';

const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: UIIcon,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

const buttonStyle = tva({
  base: 'group/button '+
        'rounded-lg '+
        'flex-row '+
        'items-center '+
        'justify-center '+
        'text-base-white '+     
        'gap-2 ',
  variants: {
    action: {
      primary:
        'bg-primary-900 '+
        'shadow-sm ' +
        'data-[hover=true]:bg-primary-700 '+
        'data-[active=true]:bg-primary-600 '+  
        'data-[active=true]:shadow-lg '+  
        'data-[active=true]:shadow-primary-500/24 '+   
        'data-[disabled=true]:border-gray-200 '+
        'data-[disabled=true]:border '+
        'data-[disabled=true]:bg-gray-100 ',
      secondaryColour:
        'bg-base-white '+
        'border '+ 
        'shadow-sm ' +
        'border-primary-300 '+
        'data-[hover=true]:bg-primary-50 '+
        'data-[active=true]:shadow-lg '+  
        'data-[active=true]:shadow-primary-500/24 '+  
        'data-[disabled=true]:border-gray-200 '+
        'data-[disabled=true]:border ',
      secondaryGray:
        'border ' + 
        'border-gray-300 '+
        'shadow-sm '+
        'bg-base-white '+
        'data-[hover=true]:bg-gray-100 '+
        'data-[active=true]:shadow-lg ',     
      destructive:
        'bg-base-white '+
        'border '+ 
        'shadow-sm ' +
        'border-error-300 '+
        'data-[hover=true]:bg-error-50 '+
        'data-[active=true]:shadow-lg '+  
        'data-[active=true]:shadow-error-500/24 '+  
        'data-[disabled=true]:border-gray-200 '+
        'data-[disabled=true]:border ',
      default:
        //'bg-transparent '+
        //'data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    variant: {
      link: 'px-0',
      outline:
        //'bg-transparent '+
        //'border data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
      solid: '',
    },

    size: {
      xs: 'px-3.5 h-8',
      sm: 'px-4 h-9',
      md: 'px-5 h-10',
      lg: 'px-6 h-11',
      xl: 'px-7 h-12',
    },
  },
  compoundVariants: [
    {
      action: 'primary',
      variant: 'link',
      class:
        'px-0 '+
        //'bg-transparent '+
        //'data-[hover=true]:bg-transparent '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'secondaryColour',
      variant: 'link',
      class:
        'px-0 '+
        //'bg-transparent '+
        //'data-[hover=true]:bg-transparent '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'secondaryGray',
      variant: 'link',
      class:
        'px-0 '+
        //'bg-transparent '+
        //'data-[hover=true]:bg-transparent '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'destructive',
      variant: 'link',
      class:
        'px-0 '+
        //'bg-transparent '+
        //'data-[hover=true]:bg-transparent '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'primary',
      variant: 'outline',
      class:
        //'bg-transparent '+
        //'data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'secondaryColour',
      variant: 'outline',
      class:
        //'bg-transparent '+
        //'data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'secondaryGray',
      variant: 'outline',
      class:
        //'bg-transparent '+
        //'data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
    },
    {
      action: 'destructive',
      variant: 'outline',
      class:
        //'bg-transparent '+
        //'data-[hover=true]:bg-background-50 '+
        //'data-[active=true]:bg-transparent',
        '',
    },
  ],
});

const buttonTextStyle = tva({
  base: //'text-typography-0 '+
        'font-semibold '+
        'web:select-none',
  parentVariants: {
    action: {
      primary:
        'text-base-white '+
        'data-[disabled=true]:text-gray-400 ',
        secondaryColour:
        'text-primary-700 '+
        'data-[hover=true]:text-primary-800 '+
        'data-[disabled=true]:text-gray-400 ',
      secondaryGray:
        'text-gray-700 '+
        'data-[hover=true]:text-gray-800 '+
        'data-[active=true]:text-gray-900 '+
        'data-[disabled=true]:text-gray-400 ',
      destructive:
      'text-error-700 '+
      'data-[hover=true]:text-error-800 '+
      'data-[disabled=true]:text-gray-400 ',
    },
    variant: {
      link: 
        //'data-[hover=true]:underline '+
        //'data-[active=true]:underline',
        '',
      outline: '',
      solid:
        //'text-typography-0 '+
        //'data-[hover=true]:text-typography-0 '+
        //'data-[active=true]:text-typography-0',
        '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class:
        //'text-typography-0 '+
        //'data-[hover=true]:text-typography-0 '+
        //'data-[active=true]:text-typography-0',
        '',
    },
    {
      variant: 'solid',
      action: 'secondaryColour',
      class:
        //'text-typography-800 '+
        //'data-[hover=true]:text-typography-800 '+
        //'data-[active=true]:text-typography-800',
        '',
    },
    {
      variant: 'solid',
      action: 'secondaryGray',
      class:
        //'text-typography-800 '+
        //'data-[hover=true]:text-typography-800 '+
        //'data-[active=true]:text-typography-800',
        '',
    },
    {
      variant: 'solid',
      action: 'destructive',
      class:
       // 'text-typography-0 '+
       // 'data-[hover=true]:text-typography-0 '+
       // 'data-[active=true]:text-typography-0',
       '',
    },
    {
      variant: 'outline',
      action: 'primary',
      class:
        //'text-primary-500 '+
        //'data-[hover=true]:text-primary-500 '+
        //'data-[active=true]:text-primary-500',
        '',
    },
    {
      variant: 'outline',
      action: 'secondaryColour',
      class:
       // 'text-typography-500 '+
       // 'data-[hover=true]:text-primary-600 '+
       // 'data-[active=true]:text-typography-700',
       '',
    },
    {
      variant: 'outline',
      action: 'secondaryGray',
      class:
        //'text-typography-500 '+
        //'data-[hover=true]:text-primary-600 '+
        //'data-[active=true]:text-typography-700',
        '',
    },
    {
      variant: 'outline',
      action: 'destructive',
      class:
        //'text-primary-500 '+
        //'data-[hover=true]:text-primary-500 '+
        //'data-[active=true]:text-primary-500',
        '',
    },
  ],
});

const buttonIconStyle = tva({
  base: 'fill-none',
  parentVariants: {
    variant: {
      link: 
        //'data-[hover=true]:underline '+
        //'data-[active=true]:underline',
        '',
      outline: '',
      solid:
        //'text-typography-0 '+
        //'data-[hover=true]:text-typography-0 '+
        //'data-[active=true]:text-typography-0',
        '',
    },
    size: {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      md: 'h-[18px] w-[18px]',
      lg: 'h-[18px] w-[18px]',
      xl: 'h-5 w-5',
    },
    action: {
      primary:
        //'text-primary-600 '+
        //'data-[hover=true]:text-primary-600 '+
        //'data-[active=true]:text-primary-700',
        '',
        secondaryColour:
        //'text-typography-500 '+
        //'data-[hover=true]:text-typography-600 '+
        //'data-[active=true]:text-typography-700',
        '',
      secondaryGray:
        //'text-typography-500 '+
        //'data-[hover=true]:text-typography-600 '+
        //'data-[active=true]:text-typography-700',
        '',
      destructive:
        //'text-error-600 '+
        //'data-[hover=true]:text-error-600 '+
        //'data-[active=true]:text-error-700',
        '',
    },
  },
  parentCompoundVariants: [
    {
      variant: 'solid',
      action: 'primary',
      class:
        //'text-base-white '+
       // 'data-[hover=true]:text-typography-0 '+
       // 'data-[active=true]:text-typography-0',
       '',
    },
    {
      variant: 'solid',
      action: 'secondaryColour',
      class:
        //'text-typography-800 '+
        //'data-[hover=true]:text-typography-800 '+
        //'data-[active=true]:text-typography-800',
        '',
    },
    {
      variant: 'solid',
      action: 'secondaryGray',
      class:
        //'text-typography-800 '+
        //'data-[hover=true]:text-typography-800 '+
        //'data-[active=true]:text-typography-800',
        '',
    },
    {
      variant: 'solid',
      action: 'destructive',
      class:
        //'text-typography-0 '+
        //'data-[hover=true]:text-typography-0 '+
        //'data-[active=true]:text-typography-0',
        '',
    },
  ],
});

const buttonGroupStyle = tva({
  base: '',
  variants: {
    space: {
      'xs': 'gap-1',
      'sm': 'gap-2',
      'md': 'gap-3',
      'lg': 'gap-4',
      'xl': 'gap-5',
      '2xl': 'gap-6',
      '3xl': 'gap-7',
      '4xl': 'gap-8',
    },
    isAttached: {
      true: 'gap-0',
    },
    flexDirection: {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
  },
});

type IButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof UIButton>,
  'context'
> &
  VariantProps<typeof buttonStyle> & { className?: string };

const Button = React.forwardRef<
  React.ElementRef<typeof UIButton>,
  IButtonProps
>(
  (
    { className, variant = 'solid', size = 'md', action = 'primary', ...props },
    ref
  ) => {
    return (
      <UIButton
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

type IButtonTextProps = React.ComponentPropsWithoutRef<typeof UIButton.Text> &
  VariantProps<typeof buttonTextStyle> & { className?: string };

const ButtonText = React.forwardRef<
  React.ElementRef<typeof UIButton.Text>,
  IButtonTextProps
>(({ className, variant, size, action, ...props }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE);

  return (
    <UIButton.Text
      ref={ref}
      {...props}
      className={buttonTextStyle({
        parentVariants: {
          variant: parentVariant,
          size: parentSize,
          action: parentAction,
        },
        variant,
        size,
        action,
        class: className,
      })}
    />
  );
});

const ButtonSpinner = UIButton.Spinner;

type IButtonIcon = React.ComponentPropsWithoutRef<typeof UIButton.Icon> &
  VariantProps<typeof buttonIconStyle> & {
    className?: string | undefined;
    as?: React.ElementType;
    height?: number;
    width?: number;
  };

const ButtonIcon = React.forwardRef<
  React.ElementRef<typeof UIButton.Icon>,
  IButtonIcon
>(({ className, size, ...props }, ref) => {
  const {
    variant: parentVariant,
    size: parentSize,
    action: parentAction,
  } = useStyleContext(SCOPE);

  if (typeof size === 'number') {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
        size={size}
      />
    );
  } else if (
    (props.height !== undefined || props.width !== undefined) &&
    size === undefined
  ) {
    return (
      <UIButton.Icon
        ref={ref}
        {...props}
        className={buttonIconStyle({ class: className })}
      />
    );
  }
  return (
    <UIButton.Icon
      {...props}
      className={buttonIconStyle({
        parentVariants: {
          size: parentSize,
          variant: parentVariant,
          action: parentAction,
        },
        size,
        class: className,
      })}
      ref={ref}
    />
  );
});

type IButtonGroupProps = React.ComponentPropsWithoutRef<typeof UIButton.Group> &
  VariantProps<typeof buttonGroupStyle>;

const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof UIButton.Group>,
  IButtonGroupProps
>(
  (
    {
      className,
      space = 'md',
      isAttached = false,
      flexDirection = 'column',
      ...props
    },
    ref
  ) => {
    return (
      <UIButton.Group
        className={buttonGroupStyle({
          class: className,
          space,
          isAttached,
          flexDirection,
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

Button.displayName = 'Button';
ButtonText.displayName = 'ButtonText';
ButtonSpinner.displayName = 'ButtonSpinner';
ButtonIcon.displayName = 'ButtonIcon';
ButtonGroup.displayName = 'ButtonGroup';

export { Button, ButtonText, ButtonSpinner, ButtonIcon, ButtonGroup };
