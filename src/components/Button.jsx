const style = (buttonStyle, disabled, isLoading, color, textColor) => {
  switch (buttonStyle) {
    case "filled":
      if (disabled || isLoading) {
        return `bg-${color}-disabled hover:cursor-not-allowed ${textColor}`;
      } else {
        return `bg-${color}-primary hover:brightness-105 ${textColor}`;
      }
    case "outline":
      if (disabled || isLoading) {
        return `border-${color}-disabled border-2 text-${color}-disable hover:cursor-not-allowed`;
      } else {
        let bg = `bg-${color}-600`;
        let border = `border-${color}-600`;
        return `${border} border-2 text-${color}-primary hover:${bg} hover:text-white`;
      }
    default:
      if (disabled || isLoading) {
        return `bg-${color}-disabled hover:cursor-not-allowed ${textColor}`;
      } else {
        return `bg-${color}-primary hover:brightness-105 ${textColor}`;
      }
  }
};

const Button = ({
  children,
  type = "button",
  buttonStyle = "filled",
  onClick,
  color = "blue",
  textColor = "text-white",
  disabled,
  className,
  icon,
  isLoading = false,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`h-fit items-center py-2 px-4 rounded-lg outline-none overflow-hidden flex ${style(
        buttonStyle,
        disabled,
        isLoading,
        color,
        textColor
      )} ${className}`}
      {...rest}
    >
      <div className={`w-full h-full flex justify-center gap-x-2 items-center`}>
        {(isLoading || icon) && (
          <>
            <section className="h-6 aspect-square flex items-center">
              {icon ? icon : null}
            </section>
          </>
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
