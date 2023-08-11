import React, { useState, useEffect } from "react";
import database from "../Firebase/database";

function PriceGet() {
  const [dataKey, setDataKey] = useState(null);
  const [price, setPrice] = useState("");
  const [users, setUsers] = useState({});

  useEffect(() => {
    // 실시간 데이터베이스에서 'users' 경로의 데이터를 읽어옵니다.
    const usersRef = database.ref("users");
    usersRef.on("value", (snapshot) => {
      setUsers(snapshot.val());
    });

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => {
      usersRef.off();
    };
  }, []);

  const writeData = () => {
    // 쓰기할 데이터
    const data = {
      price,
    };

    // 데이터베이스의 'users' 경로에 데이터 쓰기
    const newDataRef = database.ref("users").push();
    newDataRef
      .set(data)
      .then(() => {
        console.log("데이터 쓰기 성공!");
        // 쓰여진 데이터의 키를 상태에 저장
        setDataKey(newDataRef.key);
      })
      .catch((error) => {
        console.error("데이터 쓰기 실패:", error);
      });
  };

  const deleteData = () => {
    if (dataKey) {
      // 데이터베이스의 'users' 경로에 있는 특정 데이터 삭제
      database
        .ref("users")
        .child(dataKey)
        .remove()
        .then(() => {
          console.log("데이터 삭제 성공!");
          // 삭제가 성공하면 dataKey를 초기화하여 더 이상 해당 데이터를 삭제할 수 없도록 처리
          setDataKey(null);
        })
        .catch((error) => {
          console.error("데이터 삭제 실패:", error);
        });
    } else {
      console.warn("삭제할 데이터 키가 없습니다.");
    }
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="button" onClick={writeData}>
        데이터 쓰기
      </button>
      <button type="button" onClick={deleteData}>
        데이터 삭제
      </button>

      <div>
        <h2>실시간 입찰가 불러오기</h2>
        {Object.entries(users).map(([key, user]) => (
          <div key={key}>
            <p>Price: {user.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceGet;
