import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './form.css';

const CompanyForm = () => (
  <Form className="field-30">
    <Form.Field>
      <label>Company Name</label>
      <input placeholder='Company Name' />
    </Form.Field>
    <Form.Field>
      <label>How large is the company?</label>
      <input type='number' placeholder='Company size' />
    </Form.Field>

    <Button type='submit'>Submit</Button>
  </Form>
)

export default CompanyForm;
