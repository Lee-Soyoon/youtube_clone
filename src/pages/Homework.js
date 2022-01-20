import React, {useState} from 'react';

function Homework(){

    const [value, setValue] = useState(true);

  function onClickHide() {
    setValue(value => !value );
    console.log(value);
  }

    return (
      <div>
        <button onClick={onClickHide}>번역하기</button>
        {value===true ? <div>안녕하세요</div>: <div>Hi~Hello!</div>}
      </div>
    );
}


export default Homework;