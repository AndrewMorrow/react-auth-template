import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import _ from "lodash/core";
import Message from "../../partials/Message/Message";
import { setErrors } from "../../../store/error/errorActions";
import { useDispatch } from "react-redux";

const Landing = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const messages = {
    message: "This is a test message",
  };

  useEffect(() => {
    return () =>
      dispatch(
        setErrors({
          response: {
            data: {},
          },
        })
      );
  }, [dispatch]);

  return (
    <main className="min-h-screen">
      Home Page
      {!_.isEmpty(messages.message) && (
        <div className="text-center mb-6">
          <Message variant="success">{messages.message}</Message>
        </div>
      )}
    </main>
  );
};

export default Landing;
