package com.example.beApi.stream;

import java.io.File;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.function.*;

public class RefUtil {
    public static Function<String, Integer> strToInt = Integer::parseInt;

    //System.out.print
    public static Consumer<String> print = System.out::print;

    //String.valueOf
    public static Function<Object, String> onjToStre = String::valueOf;

    //String.equals
    public static BiFunction<String, String, Boolean> equals = String::equals;

    //public BiFunction<String,String, Integer> mySkip = (t, u) -> (integer.apply(t) - 1) * integer.apply(u);
    public static Function<String, Object> intValue = Integer :: valueOf;

    public static BiPredicate<String, String> equalsPredicate = String :: equals;
    public static BiFunction<Integer, Integer, Integer> random =(t,u)->(int)(Math.random()*(u-t))+t;

    public static Function<Integer, int[]> intArr = int[] :: new;
    public static Supplier<LocalDate> today = () -> LocalDate.now();
    public static Supplier<LocalTime> time = () -> LocalTime.now();
    public static BiFunction<String,String, File> mkDir = File::new;
    public static BiFunction<File,String, File> mkFile = File::new;
    //public Supplier<User> newUser = User::new;
    public static Function<Object, String> string = String::valueOf;
    public static Function<String, Integer> integer = Integer::parseInt;
    public static Function<String, Integer> integerValue = Integer :: valueOf;


    public static Function<Double, Double> absDouble = Math::abs;
    public static Function<Float, Float> absFloat = Math::abs;
    public static Function<Integer, Integer> absInteger = Math::abs;
    public static Function<Long, Long> absLong = Math::abs;

    public static Function<Double, Double> ceil = Math::ceil;

    public static Function<Double, Double> floor = Math::floor;

    public static BiFunction<Double, Double, Double> maxDouble = Math::max;
    public static BiFunction<Float, Float, Float> maxFloat = Math::max;
    public static BiFunction<Integer, Integer, Integer> maxIntefer = Math::max;
    public static BiFunction<Long, Long, Long> maxLong = Math::max;

    public static BiFunction<Double, Double, Double> minDouble = Math::min;
    public static BiFunction<Float, Float, Float> minFloat = Math::min;
    public static BiFunction<Integer, Integer, Integer> minInteger = Math::min;
    public static BiFunction<Long, Long, Long> minLong = Math::min;

    public static Supplier<Double> supplierRandom = Math::random;

    public static Function<Double, Double> rint = Math::rint;

    public static Function<Double, Long> roundDouble = Math::round;
    //public Function<Long, Intger> roundFloat = Math::round;
}
