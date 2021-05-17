import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const SlideStyle = {
  width: width * 0.8,
  margin: width * 0.1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(52, 52, 52, 0.8)",
  borderRadius: 2,
};

export const Slide = styled.View`
  ${SlideStyle}
`;
