import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/courseActions';
 class CoursesPage extends Component {

  constructor(props,context){
    super(props,context);
    this.state = {
      course: {title: ""}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // alert(`Saving ${this.state.course.title}`);
    // this.props.dispatch(courseActions.createCourse(this.state.course));
    //thanks to mapDispatchToProps
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);

  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"
        />
      </div>
    );
  }
}

//ownProps allow to get to props attached to this component
function mapStateToProps(state, ownProps) {


  //how I want to access ex. this.props.courses &&
  //how I want to retrieve the data - state.courses
  return {
    courses: state.courses
  };
}

//what actions I want to allow on props
function mapDispatchToProps(dispatch) {
//dispatch is injected by connect()
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)

  };
}


//if mapDispatchToProps would be missing, we would still be
//able to access it through this.props.dispatch

//connect is HOC that injects dispatch-actions to props and maps
//state (coming from )
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

CoursesPage.propTypes = {
  //no longer exists on this component
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};
