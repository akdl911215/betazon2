package com.example.beApi.feeds.domian;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QFeeds is a Querydsl query type for Feeds
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QFeeds extends EntityPathBase<Feeds> {

    private static final long serialVersionUID = 162455804L;

    public static final QFeeds feeds = new QFeeds("feeds");

    public final StringPath addLocation = createString("addLocation");

    public final StringPath content = createString("content");

    public final NumberPath<Long> feedNo = createNumber("feedNo", Long.class);

    public final StringPath hashTag = createString("hashTag");

    public final DateTimePath<java.util.Date> regDate = createDateTime("regDate", java.util.Date.class);

    public final StringPath title = createString("title");

    public final StringPath writer = createString("writer");

    public QFeeds(String variable) {
        super(Feeds.class, forVariable(variable));
    }

    public QFeeds(Path<? extends Feeds> path) {
        super(path.getType(), path.getMetadata());
    }

    public QFeeds(PathMetadata metadata) {
        super(Feeds.class, metadata);
    }

}

