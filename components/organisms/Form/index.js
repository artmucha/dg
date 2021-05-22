import Box from 'components/atoms/Box';
import { FormWrapper } from 'components/organisms/Form/styles';

const Form = ({children}) => (
  <Box>
    <FormWrapper>
      { children }
    </FormWrapper>
  </Box>
);

export default Form;