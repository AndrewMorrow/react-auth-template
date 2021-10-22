import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import _ from "lodash/core";
import Message from "../../partials/Message/Message";
import { setErrors } from "../../../store/error/errorActions";
import { useDispatch, useSelector } from "react-redux";

const Landing = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { messages } = state;

  useEffect(() => {
    return () =>
      dispatch(
        setErrors({
          response: {
            data: {},
          },
        })
      );
    // eslint-disable-next-line
  }, []);

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
