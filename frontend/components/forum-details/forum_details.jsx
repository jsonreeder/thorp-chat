import React from 'react';

class ForumDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleForum(this.props.params.forumName);
  }

  forumHeader () {
    let title;
    if (this.props.currentForum) {
      title = <h1>About #{this.props.currentForum.name}</h1>;
    }

    return(
      <li className="forum-title">
        {title}
      </li>
    );
  }

  channelDetails () {
    let topic;
    if (this.props.currentForum) {
      topic = <div className="forum-topic">
          {this.props.currentForum.topic}
        </div>;
    }

    return(
      <li className="forum-about">
        <h2>Channel Details</h2>
        <ul>
          <h3>Purpose</h3>
          {topic}
        </ul>
      </li>
    );
  }

  forumMembers () {
    const title = <h1>Members</h1>;
    let members;

    if (this.props.currentForum) {
      let rawMembers = this.props.currentForum.members;
      members = <ul className="forum-members">
        {rawMembers.map((member, idx) => (
           <li key={idx}>@ {member.username}</li>
         ))}
      </ul>;
    }

    return(
      <div className="forum-members">
        {title}
        {members}
      </div>
    );
  }

  render() {
    return(
      <ul className="forum-details">
        {this.forumHeader()}
        {this.channelDetails()}
        <li>{this.forumMembers()}</li>
      </ul>
    );
  }
}

export default ForumDetails;
