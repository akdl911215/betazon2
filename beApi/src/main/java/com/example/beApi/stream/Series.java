package com.example.beApi.stream;

import java.util.ArrayList;
import java.util.Comparator;

public class Series<T>{
    private ArrayList<T> arrayList;

    public Series(){arrayList = new ArrayList<T>(); }

    public boolean add(T t){return arrayList.add(t);}

    public void clear(){arrayList.clear();}

    public boolean contains(T t){ return arrayList.contains(t);}

    public T get(int index){return arrayList.get(index);}

    public boolean isEmpty(){return arrayList.isEmpty();}

    public T remove(int index){return arrayList.remove(index);}

    public int size(){return arrayList.size();}

    public void sort(Comparator c){arrayList.sort(c);}

}
