package com.example.beApi.members.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUser is a Querydsl query type for User
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUser extends EntityPathBase<User> {

    private static final long serialVersionUID = 573042100L;

    public static final QUser user = new QUser("user");

    public final StringPath password = createString("password");

    public final StringPath userAddress = createString("userAddress");

    public final StringPath userEmail = createString("userEmail");

    public final StringPath username = createString("username");

    public final NumberPath<Long> userNo = createNumber("userNo", Long.class);

    public final StringPath userPhoneNumber = createString("userPhoneNumber");

    public QUser(String variable) {
        super(User.class, forVariable(variable));
    }

    public QUser(Path<? extends User> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUser(PathMetadata metadata) {
        super(User.class, metadata);
    }

}

