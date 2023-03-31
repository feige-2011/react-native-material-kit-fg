/**
 * react-native-material-kit, the toolkit introducing {@link https://material.io/design/introduction/ | Material Design} to {@link https://facebook.github.io/react-native/ | React Native}.
 *
 * Author: ywu on 15/6/1.
 * @packageDocumentation
 */

import { Component } from 'react';
import { GestureResponderEvent } from 'react-native';
import { MeasureOnSuccessCallback } from 'react-native';
import { ReactChild } from 'react';
import { SFC } from 'react';
import { StyleProp } from 'react-native';
import { TextInputProps } from 'react-native';
import { TextStyle } from 'react-native';
import { TouchableWithoutFeedbackProps } from 'react-native';
import { ViewProps } from 'react-native';

/** Accent colored floating action button */
export declare const AccentFab: SFC<ButtonProps>;

/** Raised button with Accent color */
export declare const AccentRaisedButton: SFC<ButtonProps>;

declare class AttrReference {
    attr: string;
    constructor(attr: string);
    get value(): AttrValue;
}

export declare type AttrValue = string | number | Theme | AttrReference;

/**
 * The `Button` component.
 *
 * @remarks
 * With configurable shadow, ripple effect, and FAB style. See {@link ButtonProps} for the available props.
 *
 * Refer to {@link https://material.io/design/components/buttons.html# | Guideline} or {@link https://getmdl.io/components/index.html#buttons-section | MDL implementation}
 */
export declare class Button extends Component<ButtonProps, ButtonState> {
    /** Default props */
    static defaultProps: ButtonProps;
    /** Reference to App's {@link Theme} */
    private theme;
    constructor(props: ButtonProps);
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    /** `onLayout` handler */
    private _onLayout;
}

/** Props of {@link Button}, which extends {@link RippleProps} and {@link @types/react-native#TouchableWithoutFeedbackProps | TouchableWithoutFeedbackProps} */
export declare interface ButtonProps extends TouchableWithoutFeedbackProps, RippleProps {
    /**
     * Whether this's a FAB.
     * @defaultValue `false`
     */
    fab?: boolean;
    /**
     * Whether the button is enabled.
     * @defaultValue `true`
     */
    enabled?: boolean;
}

/**
 * State of {@link Button}
 * @internal
 */
declare interface ButtonState {
    width: number;
    height: number;
}

/** Pre-defined Button props/styles for common cases */
export declare const ButtonStyles: {
    buttonText: typeof buttonText;
    buttonTextAccent: typeof buttonTextAccent;
    buttonTextPrimary: typeof buttonTextPrimary;
    coloredButtonText: typeof coloredButtonText;
};

/** Text style for buttons, default color is `black` */
declare function buttonText(theme?: Theme, color?: AttrValue): TextStyle;

/** Text style using accent color */
declare function buttonTextAccent(theme?: Theme): TextStyle;

/** Text style using primary color */
declare function buttonTextPrimary(theme?: Theme): TextStyle;

/**
 * The `Checkbox` component.
 *
 * @remarks
 * See {@link https://material.io/components/selection-controls/#checkboxes | Guideline} & {@link http://www.getmdl.io/components/index.html#toggles-section/checkbox | MDL implementation}
 */
export declare class Checkbox extends Component<CheckboxProps, CheckboxState> {
    /** Default props */
    static defaultProps: CheckboxProps;
    private theme;
    private animatedTickAlpha;
    constructor(props: CheckboxProps);
    UNSAFE_componentWillMount(): void;
    /**
     * TODO using controlled components.
     * @see https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html?#preferred-solutions
     */
    UNSAFE_componentWillReceiveProps(nextProps: CheckboxProps): void;
    render(): JSX.Element;
    private initView;
    /** Layout event handler */
    private onLayout;
    /** Touch event handler */
    private onTouch;
    /** animate the checked state, by scaling the inner circle */
    private aniToggle;
    /** When a toggle action (from the given state) is confirmed. */
    private confirmToggle;
}

/** Props of {@link Checkbox} */
export declare type CheckboxProps = {
    /** Color of the border (outer circle), when checked */
    borderOnColor?: string;
    /** Color of the border (outer circle), when unchecked */
    borderOffColor?: string;
    /** Toggle status */
    checked?: boolean;
    /** Callback when the toggle status is changed */
    onCheckedChange?: CheckedListener;
    /** How far the ripple can extend outside the Checkbox's border, `5` by default */
    extraRippleRadius?: number;
    /** Toggle Editable */
    editable?: boolean;
} & TickProps & RippleProps & TouchableWithoutFeedbackProps;

/** State of {@link Checkbox} */
declare interface CheckboxState {
    checked: boolean;
    width: number;
    height: number;
    rippleRadii: number;
}

export declare interface CheckedEvent {
    checked: boolean;
}

export declare type CheckedListener = (event: CheckedEvent) => void;

/** Text style for colored buttons */
declare function coloredButtonText(theme?: Theme): TextStyle;

/** Primary floating action button */
export declare const ColoredFab: SFC<ButtonProps>;

/** Primary raised button */
export declare const ColoredRaisedButton: SFC<ButtonProps>;

export declare interface Dimension {
    width: number;
    height: number;
}

/** Default floating action button */
export declare const Fab: SFC<ButtonProps>;

/** Flat button (text button) */
export declare const FlatButton: SFC<ButtonProps>;

/** Public props of {@link FloatingLabel} */
declare interface FloatingLabelPublicProps {
    /** Enable floating label effect */
    floatingLabelEnabled?: boolean;
    /** Duration of floating transition, also affect underline animation */
    floatingLabelAniDuration?: number;
    /** Spacing between floating label and input text */
    floatingLabelBottomMargin?: number;
    /** {@link TextStyle} of floating label */
    floatingLabelFont?: TextStyle;
}

/** Retrieve a copy of the current theme */
export declare function getTheme(): Theme;

/**
 * The `IconToggle` component.
 *
 * See {@link https://getmdl.io/components/index.html#toggles-section/icon-toggle | MDL implementation}
 */
export declare class IconToggle extends Component<IconToggleProps, IconToggleState> {
    /** Default props */
    static defaultProps: IconToggleProps;
    private theme;
    constructor(props: IconToggleProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: IconToggleProps): void;
    render(): JSX.Element;
    /**
     * Select a child element to show for the current toggle status.
     * @see [State List](http://developer.android.com/guide/topics/resources/drawable-resource.html#StateList) in Android development
     */
    private renderChildren;
    /** Touch event handler */
    private onTouch;
    /** When a toggle action (from the given state) is confirmed. */
    private confirmToggle;
}

/** Props of {@link IconToggle} */
export declare interface IconToggleProps extends RippleProps, TouchableWithoutFeedbackProps {
    enabled?: boolean;
    /** Toggle status */
    checked?: boolean;
    /** Callback when the toggle status is changed */
    onCheckedChange?: CheckedListener;
}

/** Props of {@link IconToggle} */
declare interface IconToggleState {
    checked: boolean;
}

/**
 * Indeterminate linear progress indicator.
 *
 * @remarks
 * Continually growing and shrinking along the track until the process is complete. See {@link SimpleProgressProps} for the available props.
 *
 * Refer to {@link https://material.io/design/components/progress-indicators.html#linear-progress-indicators | Guideline} or {@link http://www.getmdl.io/components/index.html#loading-section/progress | MDL implementation}
 */
export declare class IndeterminateProgress extends Component<SimpleProgressProps> {
    /** Defaults, see {@link defaultSimpleProps} */
    static defaultProps: SimpleProgressProps;
    /** Reference to App's {@link Theme} */
    private theme;
    /** line length when progress is 100% */
    private _totalLength;
    /** height of the progress or line width */
    private _height;
    /** state of the 1st progress block */
    private _animatedBlock1;
    /** state of the 2nd progress block */
    private _animatedBlock2;
    constructor(props: SimpleProgressProps);
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    private _onLayout;
    private _aniUpdateProgress;
    private _getBlock2Ani;
}

/**
 * The default palette.
 * @public
 * Created by ywu on 15/7/16.
 */
export declare const MKColor: {
    Amber: string;
    Blue: string;
    BlueGrey: string;
    Brown: string;
    Cyan: string;
    DeepOrange: string;
    DeepPurple: string;
    Green: string;
    Grey: string;
    Indigo: string;
    LightBlue: string;
    LightGreen: string;
    Lime: string;
    Orange: string;
    Pink: string;
    Purple: string;
    Red: string;
    Silver: string;
    Teal: string;
    Yellow: string;
    Transparent: string;
    RGBAmber: string;
    RGBIndigo: string;
    RGBPink: string;
    RGBPurple: string;
    RGBTeal: string;
    palette_blue_400: string;
    palette_green_500: string;
    palette_red_500: string;
    palette_yellow_600: string;
};

/** Props of {@link MKTouchable} */
declare interface MKTouchableProps extends ViewProps {
    /** Touch events callback */
    onTouch?: (event: TouchEvent) => void;
}

export declare type NullableAttrValue = AttrValue | null | undefined;

export declare type NullableReactChild = ReactChild | null | undefined;

export declare type NullableString = string | null | undefined;

export declare type NullableStyle = object | any[] | null | undefined;

/** Numeric range */
export declare interface NumRange {
    min: number;
    max: number;
}

declare type Pred = Prediction<RadioButton>;

export declare type Prediction<T> = (obj?: T) => boolean;

/**
 * Determinate linear progress indicator.
 *
 * @remarks
 * Increasing in width from 0 to 100% of the track, in sync with the process’s progress, with a simplified buffering effect.
 * Refer to {@link https://material.io/design/components/progress-indicators.html#linear-progress-indicators | Guideline} or {@link http://www.getmdl.io/components/index.html#loading-section/progress | MDL implementation}
 */
export declare class Progress extends Component<ProgressProps> {
    /** The indeterminate version of {@link Progress} */
    static Indeterminate: typeof IndeterminateProgress;
    /** Defaults, see {@link defaultSimpleProps} */
    static defaultProps: ProgressProps;
    /** Reference to App's {@link Theme} */
    private theme;
    /** current progress value, [0, 1] */
    private _progress;
    /** current buffering value, [0, 1] */
    private _buffer;
    /** line length when progress is 100% */
    private _totalLength;
    /** height of the progress or line width */
    private _height;
    private _animatedLength;
    private _animatedBufferLength;
    constructor(props: ProgressProps);
    /** Update progress with animation */
    set progress(value: number);
    /** Get current progress */
    get progress(): number;
    /** Update buffering progress with animation */
    set buffer(value: number);
    /** Get current buffering progress */
    get buffer(): number;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: ProgressProps): void;
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    private _onLayout;
    private _aniUpdateProgress;
    private _aniUpdateBuffer;
}

/** Props of {@link Progress}, which extends {@link SimpleProgressProps} */
export declare interface ProgressProps extends SimpleProgressProps {
    /**
     * Initial value of progress, Number: [0, 1.0]
     * @defaultValue `0`
     */
    progress?: number;
    /** Initial value of buffering, Number: [0, 1.0] */
    buffer?: number;
    /** Color of the buffering layer */
    bufferColor?: string;
    /** Duration of the buffering animation, in milliseconds */
    bufferAniDuration?: number;
}

/**
 * The `RadioButton` component.
 *
 * @remarks
 * See {@link https://material.io/components/selection-controls/#radio-buttons | Guideline} & {@link http://www.getmdl.io/components/index.html#toggles-section/radio | MDL implementation}
 */
export declare class RadioButton extends Component<RadioButtonProps, RadioButtonState> {
    /** Default props */
    static defaultProps: RadioButtonProps;
    private theme;
    private animatedSize;
    private animatedRadius;
    private group?;
    constructor(props: RadioButtonProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: RadioButtonProps): void;
    componentWillUnmount(): void;
    confirmToggle(): void;
    confirmUncheck(): void;
    render(): JSX.Element;
    private initView;
    private emitCheckedChange;
    /** animate the checked state, by scaling the inner circle */
    private aniChecked;
    /** Layout event handler */
    private onLayout;
    /** Touch event handler */
    private onTouch;
}

/**
 * Managing a group of radio buttons.
 */
export declare class RadioButtonGroup {
    private readonly onAdd?;
    private readonly onRemove?;
    private buttons;
    constructor(onAdd?: Pred, onRemove?: Pred);
    add(btn: RadioButton): void;
    remove(btn: RadioButton): void;
    onChecked(btn: RadioButton, checked: boolean): void;
    private canAdd;
    private canRemove;
}

/** Props of {@link RadioButton} */
export declare interface RadioButtonProps extends RippleProps, TouchableWithoutFeedbackProps {
    borderOnColor?: string;
    borderOffColor?: string;
    fillColor?: string;
    checked?: boolean;
    group?: RadioButtonGroup;
    onCheckedChange?: CheckedListener;
    extraRippleRadius?: number;
}

/** State of {@link RadioButton} */
declare interface RadioButtonState {
    checked: boolean;
    height: number;
    width: number;
}

/** Default raised button */
export declare const RaisedButton: SFC<ButtonProps>;

/**
 * The `RangeSlider` component.
 *
 * @remarks
 * See {@link RangeSliderProps} for the available props.
 * Refer to {@link https://material.io/design/components/sliders.html | Guideline} or {@link http://www.getmdl.io/components/index.html#sliders-section | MDL implementation}
 */
export declare class RangeSlider extends Component<RangeSliderProps> {
    /** Defaults, see {@link defaultProps} */
    static defaultProps: RangeSliderProps;
    /** Reference to App's {@link Theme} */
    private theme;
    private minThumbRef;
    private maxThumbRef;
    private trackRef;
    private overrideThumb;
    private _range;
    private _trackTotalLength;
    private _trackMarginH;
    private _trackMarginV;
    private _thumbRadiiWithBorder;
    private readonly _lowerTrackLength;
    private readonly _lowerTrackMin;
    constructor(props: RangeSliderProps);
    /** Public api to update the current `minValue` */
    set minValue(value: number);
    /** Retrieve the current `minValue` */
    get minValue(): number;
    /** Public api to update the current `maxValue` */
    set maxValue(value: number);
    /** Retrieve the current `maxValue` */
    get maxValue(): number;
    private get minThumb();
    private get maxThumb();
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: RangeSliderProps): void;
    render(): JSX.Element;
    /** callback when the Track component's layout changes */
    private _onTrackLayout;
    private _beginMove;
    private _endMove;
    private _updateValueByTouch;
    private _snap;
    private _defaultStepIncrement;
    private _setRange;
    private _toSliderScale;
    private _toPixelScale;
    private _internalSetValue;
    private _emitChange;
    private _emitConfirm;
    private _updateValue;
    private _validateMove;
    private _moveThumb;
    private _onThumbRadiiUpdate;
    private _verifyStep;
}

/** Props of {@link RangeSlider} */
export declare interface RangeSliderProps extends ViewProps {
    /**
     * Lower limit of the range, default is `0`
     * @defaultValue `0`
     */
    min: number;
    /**
     * Upper limit of the range, default is `100`
     * @defaultValue `100`
     */
    max: number;
    /** Initial value of range */
    range?: NumRange;
    /** The thickness of the RangeSlider track */
    trackSize?: number;
    /** Radius of the thumb of the RangeSlider */
    thumbRadius?: number;
    /** Padding for the hitSlop on the RangeSlider thumb */
    thumbPadding?: number;
    /** Color of the lower part of the track, it's also the color of the thumb */
    lowerTrackColor?: any;
    /** Color of the upper part of the track */
    upperTrackColor?: any;
    /** Callback when drag gesture begins */
    onStart?: ThumbGestureCallback;
    /** Callback when value changed */
    onChange?: (range: NumRange) => void;
    /** Callback when the value is confirmed */
    onConfirm?: (range: NumRange) => void;
    /** Step value of the RangeSlider, must be a divisor of max */
    step?: number;
}

/**
 * Reusable `Ripple` effect.
 */
export declare class Ripple extends Component<RippleProps, RippleState> {
    /** Default props */
    static defaultProps: RippleProps;
    private containerRef;
    private maskRef;
    private rippleRef;
    private _animatedAlpha;
    private _animatedRippleScale;
    private _rippleAni?;
    private _pendingRippleAni?;
    constructor(props: RippleProps);
    /**
     * Measure the size of the `Ripple`.
     * @param cb {@link MeasureOnSuccessCallback | measurement callback}
     */
    measure(cb: MeasureOnSuccessCallback): any;
    /** Start the ripple effect */
    showRipple(): void;
    /** Stop the ripple effect */
    hideRipple(): void;
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    private _onLayout;
    private _onLayoutChange;
    private _calcMaskLayer;
    private _calcRippleLayer;
    private _onTouchEvent;
    private _onPointerDown;
    private _onPointerUp;
}

export declare type RippleLocation = 'tapLocation' | 'center';

/** Props of {@link Ripple } */
export declare type RippleProps = {
    /** Color of the `Ripple` layer */
    rippleColor?: string;
    /** Duration of the ripple effect, in milliseconds */
    rippleDuration?: number;
    /** Hot-spot position of the ripple effect, see {@link RippleLocation} */
    rippleLocation?: RippleLocation;
    /**
     * Whether a `Mask` layer should be used, to clip the ripple to the container’s bounds, default is `true`
     * @defaultValue `true`
     */
    maskEnabled?: boolean;
    /** Color of the `Mask` layer */
    maskColor?: string;
    /** Border width TODO move to `style`? */
    borderWidth?: number;
    /** Border radius of the `Mask` layer */
    maskBorderRadius?: number;
    /** Border radius of the `Mask` layer, in percentage (of min(width, height)) */
    maskBorderRadiusInPercent?: number;
    /** Duration of the mask effect (alpha), in milliseconds */
    maskDuration?: number;
    /** Animating the shadow (on pressed/released) or not */
    shadowAniEnabled?: boolean;
    /** Whether the component is disabled */
    disabled?: boolean;
} & MKTouchableProps;

/** State of the {@link Ripple} */
declare interface RippleState {
    width: number;
    height: number;
    maskBorderRadius: number;
    shadowOffsetY: number;
    ripple: {
        radii: number;
        dia: number;
        offset: {
            top: number;
            left: number;
        };
    };
}

/**
 * Set the current theme.
 * @param `aTheme` the new {@link Theme}
 *
 * See http://www.getmdl.io/customize
 */
export declare function setTheme(aTheme: Theme): void;

/** Basic Props of {@link Progress}, which extends {@link ViewProps} */
export declare interface SimpleProgressProps extends ViewProps {
    /** Color of the progress layer */
    progressColor?: string;
    /** Animation duration (milliseconds) */
    progressAniDuration?: number;
}

/**
 * The `Slider` component.
 *
 * @remarks
 * See {@link SliderProps} for the available props.
 * Refer to {@link https://material.io/design/components/sliders.html | Guideline} or {@link http://www.getmdl.io/components/index.html#sliders-section | MDL implementation}
 */
export declare class Slider extends Component<SliderProps> {
    /** Defaults, see {@link defaultProps} */
    static defaultProps: SliderProps;
    /** Reference to App's {@link Theme} */
    private theme;
    private thumbRef;
    private _value;
    private _trackMarginH;
    private _trackMarginV;
    private _trackTotalLength;
    private _thumbRadiiWithBorder;
    private _prevPointerX;
    private _animatedTrackLength;
    private _panResponder;
    constructor(props: SliderProps);
    set value(value: number);
    get value(): number;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: SliderProps): void;
    render(): JSX.Element;
    private _onTrackLayout;
    private _snap;
    private _defaultStepIncrement;
    private _internalSetValue;
    private _emitChange;
    private _emitOnPressIn;
    private _emitOnPressOut;
    private _emitConfirm;
    private _aniUpdateValue;
    private _onPanResponderEnd;
    private _onTouchEvent;
    private _getTouchOnTrack;
    private _updateValueByTouch;
    private _toSliderScale;
    private _toPixelScale;
    private _confirmUpdateValueByTouch;
    private _moveThumb;
    private _confirmMoveThumb;
    private _onThumbRadiiUpdate;
    private _verifyStep;
}

/** Props of {@link Slider} */
export declare interface SliderProps extends ViewProps {
    /**
     * Minimum value of the range, default is `0`.
     * @defaultValue `0`
     */
    min: number;
    /**
     * Maximum value of the range, default is `100`.
     * @defaultValue `100`
     */
    max: number;
    /**
     * Current value
     * @defaultValue `0`
     */
    value: number;
    /** The thickness of the Slider track */
    trackSize?: number;
    /** Radius of the thumb of the Slider */
    thumbRadius?: number;
    /** Padding for the hitSlop on the Slider thumb */
    thumbPadding?: number;
    /** Color of the lower part of the track, it's also the color of the thumb */
    lowerTrackColor?: any;
    /** Color of the upper part of the track */
    upperTrackColor?: any;
    /** Callback when value changed */
    onChange?: (value: number) => void;
    /** Callback when slider is pressed anywhere */
    onPressIn?: () => void;
    /** Callback when slider stops being pressed */
    onPressOut?: () => void;
    /** Callback when the value is confirmed */
    onConfirm?: (value: number) => void;
    /** Step value of the Slider, must be a divisor of max */
    step?: number;
}

/**
 * The default `Spinner` component.
 *
 * @remarks
 * See {@link SpinnerProps} for the available props.
 *
 * Refer to {@link https://material.io/design/components/progress-indicators.html#circular-progress-indicators | Guideline} or {@link http://www.getmdl.io/components/index.html#loading-section/spinner | MDL implementation}
 */
export declare class Spinner extends Component<SpinnerProps, SpinnerState> {
    /** Default props of {@link Spinner} */
    static defaultProps: SpinnerProps;
    /** Reference to App's {@link Theme} */
    private theme;
    private _nextStrokeColorIndex;
    private _animatedContainerAngle;
    private _animatedArcAngle;
    constructor(props: SpinnerProps);
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    private _onLayout;
    private _aniUpdateSpinner;
    private _renderSpinnerLayer;
    private _updateStrokeColor;
}

/** Props of {@link Spinner}, which extends {@link ViewProps} */
export declare interface SpinnerProps extends ViewProps {
    /**
     * Colors of the progress stroke.
     *
     * type: {`Array`|`String`} can be a list of colors or a single one
     */
    strokeColor?: any;
    /** Width of the progress stroke */
    strokeWidth?: number;
    /** Duration of the spinner animation, in milliseconds */
    spinnerAniDuration?: number;
}

/** Sate of {@link Spinner} */
declare interface SpinnerState {
    dimen: Dimension;
    strokeColor: any;
}

export declare type Style = object | any[];

/**
 * The `Switch` component.
 *
 * @remarks
 * Which is made up of a `Track` and a {@link Thumb}.
 *
 * See {@link https://material.io/components/selection-controls/#switches | Guideline} & {@link http://bit.ly/1IcHMPo | MDL implementation}
 */
export declare class Switch extends Component<SwitchProps, SwitchState> {
    /** Default props */
    static defaultProps: SwitchProps;
    private theme;
    private thumbRef;
    private animatedThumbLeft;
    constructor(props: SwitchProps);
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: SwitchProps): void;
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    /**
     * Un-boxing the `Thumb` node from `AnimatedComponent`,
     * in order to access the component functions defined in `Thumb`
     */
    private get thumb();
    private getBgColor;
    private onPress;
    private onPressIn;
    private onPressOut;
    /** Layout the thumb according to the size of the track */
    private layoutThumb;
    /** init layout according to the props */
    private initLayout;
    /** Move the thumb left or right according to the current state */
    private translateThumb;
    /** Calc the next position (x-axis) of the thumb */
    private computeThumbX;
    /** When a toggle action started. */
    private startToggle;
    /** When a toggle action is confirmed. */
    private confirmToggle;
    /** When a toggle action is finished (confirmed or canceled). */
    private endToggle;
}

/** Props of {@link Switch} */
export declare interface SwitchProps extends TouchableWithoutFeedbackProps {
    /** Toggle status of the `Switch` */
    checked?: boolean;
    /** Callback when the toggle status is changed. */
    onCheckedChange?: CheckedListener;
    /** Color of the track, when switch is checked */
    onColor?: string;
    /** Color of the track, when switch is off */
    offColor?: string;
    /** The thickness of the Switch track */
    trackSize?: number;
    /** The length of the Switch track */
    trackLength?: number;
    /** Radius of the thumb button */
    thumbRadius?: number;
    /** Color of the thumb, when switch is checked */
    thumbOnColor?: string;
    /** Color of the thumb, when switch is off */
    thumbOffColor?: string;
    /** Duration of the thumb sliding animation, in milliseconds */
    thumbAniDuration?: number;
    /** Color of the ripple layer */
    rippleColor?: string;
    /** Duration of the ripple effect, in milliseconds */
    rippleAniDuration?: number;
}

/** State of {@link Switch} */
declare interface SwitchState {
    checked: boolean;
    thumbFrame: {
        padding: number;
        r: number;
        rippleRadii: number;
        x: number;
    };
    trackLength: number;
    trackMargin: number;
    trackRadii: number;
    trackSize: number;
}

/**
 * The `Textfield` component, which has an optional {@link FloatingLabel} and {@link Underline}.
 * - TODO styling `read-only` & `disabled` mode
 */
export declare class Textfield extends Component<TextfieldProps, TextfieldState> {
    /** Defaults, see {@link defaultProps} */
    static defaultProps: Partial<TextfieldProps>;
    private theme;
    private readonly inputFrame;
    private inputRef;
    private labelRef;
    private underlineRef;
    private anim?;
    private _bufferedValue;
    constructor(props: TextfieldProps);
    private set bufferedValue(value);
    private get bufferedValue();
    private set placeholder(value);
    /**
     * Requests focus for the given input or view. The exact behavior triggered
     * will depend on the platform and type of view.
     */
    focus(): void;
    /**
     * Checks if the input is currently focused.
     */
    isFocused(): boolean;
    /**
     * Removes focus from an input or view. This is the opposite of `focus()`.
     */
    blur(): void;
    UNSAFE_componentWillMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: TextfieldProps): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private _onTextChange;
    private _onFocus;
    private _onBlur;
    private startAnimations;
    private _doMeasurement;
    private _onLabelMeasured;
    private _onInputMeasured;
    private _aniFloatLabel;
    private _aniStartHighlight;
    private _aniStopHighlight;
    private _callback;
}

/** Props of the {@link Textfield} component */
export declare interface TextfieldProps extends TextInputProps, FloatingLabelPublicProps, UnderlinePublicProps {
    /** alias to `onChangeText` */
    onTextChange?: (text: string) => void;
    /** Alias to `secureTextEntry` */
    password?: boolean;
    /** Color of the un-highlighted underline, and the placeholder
     * - TODO cursor color is not affected for now
     * @see https://github.com/facebook/react-native/issues/1685
     */
    tint?: any;
    /** Color of the highlighted underline, and also the floating label */
    highlightColor?: any;
    /** Style applied to the `TextInput` component, ok to use `StyleSheet` */
    textInputStyle?: StyleProp<TextStyle>;
    /** Additional props passed directly to the react native `TextInput` component */
    additionalInputProps?: TextInputProps;
}

/** State of the {@link Textfield} component */
declare interface TextfieldState {
    inputMarginTop: number;
}

export declare interface Theme {
    [name: string]: AttrValue;
}

/** `Thumb` component of {@link Slider} and {@link RangeSlider}. */
declare class Thumb extends Component<ThumbProps, ThumbState> {
    /** Defaults, see {@link defaultProps} */
    static defaultProps: ThumbProps;
    /** current x-axis position */
    x: number;
    private _radii;
    private _dia;
    private _containerRadii;
    private _containerDia;
    private readonly _trackMarginH;
    private _panResponder;
    private _animatedLeft;
    private _animatedScale;
    constructor(props: ThumbProps);
    UNSAFE_componentWillMount(): void;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: ThumbProps): void;
    componentWillUnmount(): void;
    /**
     * animate the sliding
     * @param x target position, relative to the track
     */
    moveTo(x: number): void;
    /** stop sliding */
    confirmMoveTo(): void;
    /** {@inheritDoc @types/react#Component.render} */
    render(): JSX.Element;
    private _onRadiiUpdate;
    private _getOnSliding;
    private _onExplode;
    private _onCollapse;
}

/** Gesture event callback for the `Thumb` component. see {@link GestureResponderEvent} */
declare type ThumbGestureCallback = (thumb: Thumb, event: GestureResponderEvent) => void;

/** Props of {@link Thumb}, which extends {@link @types/react-native#ViewProps | ViewProps}  */
declare interface ThumbProps extends ViewProps {
    /** Callback to handle onPanResponderGrant gesture */
    onGrant?: ThumbGestureCallback;
    /** Callback to handle onPanResponderMove gesture */
    onMove?: ThumbGestureCallback;
    /** Callback to handle onPanResponderRelease/Terminate gesture */
    onEnd?: ThumbGestureCallback;
    /** Color when thumb has no value */
    disabledColor?: string;
    /** Color when thumb has value */
    enabledColor?: string;
    /** Radius of thumb component */
    radius?: number;
    /** Padding for the hitSlop on the Thumb component */
    touchPadding?: number;
}

/** State of {@link Thumb} component */
declare interface ThumbState {
    color: any;
    borderColor: any;
}

declare interface TickProps extends ViewProps {
    /** Background color of the tick */
    fillColor?: string;
    /** Insets of the tick */
    inset?: number;
}

/** Touching event emitted by a {@link MKTouchable} */
declare interface TouchEvent {
    type: 'TOUCH_DOWN' | 'TOUCH_UP' | 'TOUCH_MOVE' | 'TOUCH_CANCEL';
    x: number;
    y: number;
}

/** Props of the {@link Underline} component */
declare interface UnderlinePublicProps {
    /** The highlighted bottom border effect */
    underlineEnabled?: boolean;
    /** The thickness of the Underline */
    underlineSize?: number;
}

export { }
