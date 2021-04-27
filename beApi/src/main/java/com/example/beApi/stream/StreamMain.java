package com.example.beApi.stream;

import java.sql.Array;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Student implements Comparable<Student> {
    private String name;
    private String username; // ID
    private int grade;
    private int score;

    public Student(String name, int grade, int score, String username) {
        this.name = name;
        this.grade = grade;
        this.score = score;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }



    public void setName(){
        this.name = name;
    }

    public void setGrade(){
        this.grade = grade;
    }

    public void setScoer(){
        this.score = score;
    }

    public String getName(){
        return name;
    }

    public int getGrade(){
        return grade;
    }

    public int getScore(){
        return score;
    }

    public String toString(){
        return "이름 = " + name + ", 학년 = " + grade + ", 점수 = " + score + ", ID = " + username;
    }

    @Override
    public int compareTo(Student o) {
        return o.getScore() - this.getScore();
    }
}

public class StreamMain {

    public static void main(String... args) {
        Scanner scanner = new Scanner(System.in);
        while(true){
            System.out.println("메뉴: 0. EXIT 1.학년오름차순 2. 성적오름차순 3.이름오름차순 4.ID오름차순 5.성적내림차순");
            System.out.print("번호를 입력하시오: ");
            switch (scanner.nextInt()){
                case 0: return;
                case 1: ascGrade().forEach(System.out::println); break;
                case 2: ascScore().forEach(System.out::println); break;
                case 3: ascName().forEach(System.out::println); break;
                case 4: ascUsername().forEach(System.out::println); break;
                case 5: descScore().forEach(System.out::println); break;
            }
        }

    }

    public static Stream<Student> makeSteram(){
        DummyGenerator dum = new DummyGenerator();

        return Stream.of(
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername()),
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername()),
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername()),
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername()),
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername()),
                new Student(dum.makeName(), RefUtil.random.apply(1,3),RefUtil.random.apply(0,100), dum.makeUsername())
        );
    }

    public static Stream<Student> ascGrade(){

        return makeSteram().sorted(Comparator.comparing(Student::getGrade)
                .thenComparing(Comparator.naturalOrder()));
    }

    public static Stream<Student> ascName() {


        return makeSteram().sorted(Comparator.comparing(Student::getName)
            .thenComparing(Comparator.naturalOrder()));
    }

    public static Stream<Student> ascUsername() {
        return makeSteram().sorted(Comparator.comparing(Student::getUsername)
                .thenComparing(Comparator.naturalOrder()));
    }

    public static Stream<Student> ascScore() {
        return makeSteram().sorted(Comparator.comparing(Student::getScore)
                .thenComparing(Comparator.naturalOrder()));

    }

    public static Stream<Student> descScore(){
        return makeSteram().sorted(Comparator.comparing(Student::getScore)
            .thenComparing(Collec.reverseOrder()));
    }
}
