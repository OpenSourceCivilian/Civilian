import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

console.log('in Post.jsx');

// we are destructuring the state to get the title, loc, details, time from
// the redux state and placing them into the props object
// The Post component "subscribes to" the changes seen in the state
const mapStateToProps = ({posts: { title, street_name, details, time, image_url }}) => ({
  title,
  street_name,
  details,
  time,
  image_url
})

// allows us to use the actions in actions.js without having to wrap them so that we can invoke those functions
// directly even though they were not created in this page
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Post = (props) => {
  console.log(props);
  return (
    <div className='post'>
      <div className='post-header'>
        <p className='post-time'>Last updated at {props.time} </p>
        <p className='post-title'> {props.title} </p>
        <p className='post-location'> {props.street_name} </p>
        <p className='post-details'> {props.details} </p>
      </div> 
      <div className='post-image'>
        <img id='thumbnail' src={props.image_url} alt="thumbnail-image" onClick={() => props.setExpandedPost(true)}/>
      </div>
      {/* <div className='post-icons'>
        { <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 128 128">
          <radialGradient id="ssvg-id-anguished-facea" cx="63.6" cy="1696.9" r="56.96" gradientTransform="translate(0 -1634)" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fde030"/>
          <stop offset=".92" stop-color="#f7c02b"/>
          <stop offset="1" stop-color="#f4a223"/>
          </radialGradient>
          <path d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z" fill="url(#ssvg-id-anguished-facea)"/><path d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z" fill="#eb8f00"/><g><path d="M52.7 103c-3.35 0-6.45-1.74-8.2-4.6a8 8 0 0 1 .4-8.9c4.3-6 10.9-9.2 19.1-9.2s14.8 3.2 19.1 9.2a8 8 0 0 1 .4 8.9a9.606 9.606 0 0 1-8.2 4.6c-1.05-.01-2.1-.18-3.1-.5a26.56 26.56 0 0 0-16.4 0c-1 .31-2.05.48-3.1.5z" fill="#422b0d"/><g fill="#422b0d"><path d="M83.4 31.31h-.1c-1.01.08-1.9-.67-1.99-1.68c-.08-1.01.67-1.9 1.68-1.99c1.93-.29 3.9-.27 5.83.05c5.23.8 9.96 3.56 13.22 7.73c1.49 2-1.14 3.9-2.79 2.4c-4.4-3.89-9.98-6.18-15.85-6.51z"/><path d="M44.85 31.31H45c1.02.02 1.85-.79 1.87-1.81c.02-.92-.66-1.72-1.57-1.85c-1.93-.29-3.9-.27-5.83.05c-5.24.79-9.97 3.56-13.23 7.73c-1.48 2 1.15 3.9 2.79 2.4a26.23 26.23 0 0 1 15.82-6.52z"/></g><path d="M44 49.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.2 0 8-3.54 8-9.41s-3.76-9.42-8-9.42z" fill="#422b0d"/><path d="M43.65 53.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024"/><path d="M82.4 49.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.19 0 8-3.54 8-9.41s-3.81-9.42-8-9.42z" fill="#422b0d"/><g><path d="M82 53.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z" fill="#896024"/>
          </g></g>
        </svg> }
      </div> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);