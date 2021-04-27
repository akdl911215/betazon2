package com.example.beApi.stream;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class StreamUtil {
        public List<String> arryTolist(String[] arr){
            return Arrays.asList(arr).stream().sorted().collect(Collectors.toList());
        }

        public List<String> arryToList2(String[] arr){
            return Arrays.asList(arr).stream().sorted().collect(Collectors.toList());
        }

        public List<String> arryToList3(String[] arr2){
            return Arrays.asList(arr2).stream().sorted().collect(Collectors.toList());
        }
}
