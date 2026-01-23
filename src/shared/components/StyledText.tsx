import { TextCustom, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <TextCustom {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
