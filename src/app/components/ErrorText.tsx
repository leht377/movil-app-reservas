import StyledText from "./StyledText";

const ErrorText = ({ error, touched }) => {
  return touched && error ? (
    <StyledText fontSize="bodymini" color="primary" fontWeight="bold">
      * {error}
    </StyledText>
  ) : null;
};

export default ErrorText;
