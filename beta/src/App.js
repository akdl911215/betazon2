import logo from './logo.svg';
import './App.css';
import { ArticleList, ArticleWrite, ArticleDetail } from 'article/index';
import { Login, SignUp, UserDetail } from 'user/index';
import { HomeMainHead, HomeMainFooter, HomeMainNavi, Home } from 'common/index';
import { SeoulCCTV } from 'board/index';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Route exact path="/" component={Home}></Route>

            <Route exact path="/article/component/article-list" component={ArticleList} />
            <Route exact path="/article/component/article-write" component={ArticleWrite}></Route>
            <Route exact path="/article/component/article-detail" component={ArticleDetail}></Route>
            <Route exact path="/board/component/seoul-cctv" component={SeoulCCTV}></Route>

            <Route exact path="/user/component/login" component={Login}></Route>
            <Route exact path="/user/component/sign-up" component={SignUp}></Route>
            <Route exact path="/user/component/user-detail" component={UserDetail}></Route>

            <Route exact path="/common/component/home-main-navi" component={HomeMainNavi}></Route>
            <Route exact path="/common/component/home-main-footer" component={HomeMainFooter}></Route>
            <Route exact path="/common/component/home-main-head" component={HomeMainHead}></Route>
        </div>
    );
};

export default App;