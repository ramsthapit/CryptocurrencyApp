import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { Avatar, Card, Col, Row, Select, Typography } from 'antd'
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
  const { data } = useGetCryptosQuery(100)

  if(!cryptoNews?.value) return <Loader />
  
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select 
            showSearch
            className="select-news"
            placeholder="select a Crypto"
            optionFilterProp='childern'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option)=> option.childern.toLowerCase().indexOf(input.toLowerCase()) > 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option> )}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel="noreferrer" >
              <div className='new-image-container'>
                <Title className='new-title' level={4}>{news.name} </Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description
                }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.thumbnail?.contentUrl || demoImage} alt="news" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News