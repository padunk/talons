import React, { ReactElement } from "react";
import {
  Container,
  UnstyledInputText,
  FormWrapper,
  StyledForm,
  FormInputWrapper,
} from "../GlobalComponents/GlobalComponents";
import { Button } from "../Buttons/Button";

interface Props {}

export function AddProject({}: Props): ReactElement {
  return (
    <Container>
      <FormWrapper>
        <div>
          <h3>ADD PROJECT</h3>
        </div>
        <StyledForm action='post'>
          <FormInputWrapper>
            <label htmlFor='project-title'>Title:</label>
            <UnstyledInputText
              type='text'
              name='project-title'
              id='project-title'
            />
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='project-summary'>Summary:</label>
            <textarea></textarea>
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='project-installation'>Installation & Usage:</label>
            <textarea></textarea>
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='project-tech'>Technology:</label>
            <select name='project-tech' id='project-tech'>
              <option value='htmlAndCss'>HTML & CSS</option>
              <option value='javascript'>JavaScript</option>
              <option value='reactJS'>ReactJS</option>
              <option value='vueJS'>VueJS</option>
              <option value='svelteJS'>SvelteJS</option>
            </select>
          </FormInputWrapper>
          <FormInputWrapper>
            <label htmlFor='project-title'>Challenges</label>
            <textarea></textarea>
          </FormInputWrapper>
          <FormInputWrapper>
            <Button type='submit' looks='primary'>
              Preview
            </Button>
            <Button type='submit' looks='secondary'>
              ADD PROJECT
            </Button>
          </FormInputWrapper>
        </StyledForm>
      </FormWrapper>
    </Container>
  );
}
