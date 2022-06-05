import React, { useState, useEffect } from "react";
import { withCookies } from "react-cookie";
import axios from "axios";
import { Card, Container, Col, Row } from "react-bootstrap";

const ApiFetch = (props) => {
  const token = props.cookies.get("current-token");
  // console.log(token)
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/news/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setNews(res.data);
      });
  }, [token]);

  return (
    <div>
      {news.map((news) => (
        <Container>
          <ul>
            <li key={news.id}>
              <Card className="card">
                <Card.Body>
                  <Row>
                    <Col sm={3}>
                      <a href={news.link}>
                        <img src={news.image} alt="news_img" />
                      </a>
                    </Col>
                    <Col sm={9}>
                      <Card.Title>{news.title} </Card.Title>
                      <Card.Text className="card-body">
                        {news.body.slice(0, 105)}...
                      </Card.Text>
                      <a href={news.link} class="btn btn-outline-secondary">
                        続きを読む
                      </a>
                      <Card.Text>更新日時：{news.published}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </li>
          </ul>
          {/* <ReactPaginate
            pageCount={Math.ceil(news.id.length / 4)} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
            marginPagesDisplayed={2} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
            pageRangeDisplayed={5} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
            onPageChange={this.pageChange} //ページネーションのリンクをクリックしたときのイベント(詳しくは下で解説します)
            containerClassName='pagination' //ページネーションリンクの親要素のクラス名
            pageClassName='page-item' //各子要素(li要素)のクラス名
            pageLinkClassName='page-link' //ページネーションのリンクのクラス名
            activeClassName='active' //今いるページ番号のクラス名。今いるページの番号だけ太字にしたりできます 
            previousLabel='<' //前のページ番号に戻すリンクのテキスト
            nextLabel='>' //次のページに進むボタンのテキスト
            previousClassName='page-item' // '<'の親要素(li)のクラス名
            nextClassName='page-item' //'>'の親要素(li)のクラス名
            previousLinkClassName='page-link'  //'<'のリンクのクラス名
            nextLinkClassName='page-link'//'>'のリンクのクラス名
            disabledClassName='disabled' //先頭 or 末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
            breakLabel='...' // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
            breakClassName='page-item' // 上記の「…」のクラス名
            breakLinkClassName='page-link' // 「…」の中のリンクにつけるクラス
          /> */}
        </Container>
      ))}
    </div>
  );
};

export default withCookies(ApiFetch);
