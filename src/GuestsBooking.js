import React from "react";

const GuestsBooking = () => {
  return (
    <div>
      <form method="POST" action="/guest">
        <input type="text" />
        <input type="submit" class="btn btn-primary" />
      </form>
    </div>
  );
};

export default GuestsBooking;
