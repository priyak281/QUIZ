import React from 'react'

function Feedback() {
  return (
    <div><form>
    <label>
      FirstName:
      <input type="text" name="firstname" />
    </label>

    <label>
      LastName:
      <input type="text" name="lastname" />
    </label>

    <label>
     Mobile:
      <input type="text" name="mobilenumber" />
    </label>

    <label>
      Feedback:
      <input type="text" name="feeback" />
    </label>

    <input type="submit" value="Submit" />
  </form></div>
  )
}

export default Feedback