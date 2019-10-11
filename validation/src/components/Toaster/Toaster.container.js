import React from 'react';
import Toaster from './Toaster';
import { connect } from 'react-redux';

const mapToStateToProps = ({ theme, toast }) => ({ theme, toast });

export default connect(
  mapToStateToProps,
) (Toaster);