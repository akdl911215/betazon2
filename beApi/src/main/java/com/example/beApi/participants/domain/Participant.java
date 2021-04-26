package com.example.beApi.participants.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "participants")
public class Participant {

    @Id
    @GeneratedValue

    @Column(name = "particimant_no")
    private long participantNo;

    @Column(name = "participant_name")
    private String participantName;

    @Column(name = "password")
    private String password;

    @Column(name = "praticipant_email")
    private String praticipantEmail;
}
