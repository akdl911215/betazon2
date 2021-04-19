import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { ArticleList, ArticleWrite, ArticleDetail } from 'article/index';
import { Login, SignUp, UserDetail } from 'user/index';
import { HomeMain, HomeMainFooter, HomeMainNavi, Home } from 'common/index';
import { SeoulCCTV } from 'board/index';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home} />

            <Route exact path="/article/component/article-list" component={ArticleList} />
            <Route exact path="/article/component/article-write" component={ArticleWrite} />
            <Route exact path="/article/component/article-detail" component={ArticleDetail} />

            <Route exact path="/board/component/seoul-cctv" component={SeoulCCTV} />

            <Route exact path="/user/component/login" component={Login} />
            <Route exact path="/user/component/sign-up" component={SignUp} />
            <Route exact path="/user/component/user-detail" component={UserDetail} />

            <Route exact path="/common/component/HomeMainNavi" component={HomeMainNavi} />
            <Route exact path="/common/component/HomeMain" component={HomeMain} />
            <Route exact path="/common/component/HomeMainFooter" component={HomeMainFooter} />
        </div>
    );
};

export default App;
