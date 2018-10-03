import * as PresentationActions from '../../data/action/presentationActions';
import { connect } from 'react-redux';
import { RootState } from '../../data/store';
import { MainComponent, MainProps } from './main';

const mapStateToProps = (state: RootState): MainProps => ({
  presentationModeEnabled: state.presentation.enabled,
  navBarSelection: state.navBar.selection
});

const mapDispatchToProps = (dispatch): MainProps => ({
  exitPresentationMode: (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(PresentationActions.disable());
    }
  }
});

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
