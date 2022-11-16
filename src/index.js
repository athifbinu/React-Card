import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';
import CommentDetail from "./CommentDetails";
import AprovelCard from "./AprovelCard";
import 'semantic-ui-css/semantic.min.css'
//server

const App = () => {
  return (
    <div className="ui container comments">
      <AprovelCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </AprovelCard>

      <AprovelCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
          avatar={faker.image.image()}
        />
      </AprovelCard>

      <AprovelCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
          avatar={faker.image.image()}
        />
      </AprovelCard>

      <AprovelCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
          avatar={faker.image.image()}
        />
      </AprovelCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));