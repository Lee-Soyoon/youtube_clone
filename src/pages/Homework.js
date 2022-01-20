import React, {useState} from 'react';
import Layout from '../components/shared/Layout';


function Homework(){

    const [value, setValue] = useState(true);

  function onClickHide() {
    setValue(value => !value );
    console.log(value);
  }

    return (
      <Layout activeMenu="homework">
        <button onClick={onClickHide}>번역하기</button>
        {value===true ? <div>안녕하세요</div>: <div>Hi~Hello!</div>}
      </Layout>
    );
}


export default Homework;