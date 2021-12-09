/* eslint-disable @next/next/no-img-element */
interface Props {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Image: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  className,
  ...props
}: Props) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={'lazy'}
      draggable={false}
      {...props}
    />
  );
};

export default Image;
