import logo from './logo.svg';
import './App.css';
// import { ArticleLi } from 'allProducts/index';
import { ArticleList, ArticleWrite, ArticleDetail } from 'article/index';
import { SeoulCCTV } from 'board/index';
import { HomeMainHead, HomeMainFooter, HomeMainNavi, Home } from 'common/index';
import { Counter, CounterContainer } from 'counter/index';
// import {  } from 'feedBoard/index';
// import {  } from 'newProduct/index';
import { ReviewItemApp, ReviewItem } from 'reviewItem/index';
import { Login, SignUp, UserDetail, UserList } from 'user/index';
import { TodoApp } from 'todo/index';
import { withoutRedux1 } from 'collorItem/index';
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
            <Route exact path="/user/component/user-list" component={UserList}></Route>

            <Route exact path="/common/component/home-main-navi" component={HomeMainNavi}></Route>
            <Route exact path="/common/component/home-main-footer" component={HomeMainFooter}></Route>
            <Route exact path="/common/component/home-main-head" component={HomeMainHead}></Route>

            <Route exact path="/counter/component/counter" component={Counter}></Route>
            <Route exact path="/counter/container/counter-container" component={CounterContainer}></Route>

            <Route exact path="/reviewItem/container/review-item-app" component={ReviewItemApp}></Route>

            <Route exact path="/todo/continer/todo-app" component={TodoApp}></Route>

            <Route exact path="/todo/continer/without-redux1" component={withoutRedux1}></Route>
        </div>
    );
};

export default App;
