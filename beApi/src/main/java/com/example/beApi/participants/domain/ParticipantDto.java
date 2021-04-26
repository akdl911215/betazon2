package com.example.beApi.participants.domain;

import javax.persistence.Column;
import java.io.Serializable;

public class ParticipantDto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "particimant_no")
    private long participantNo;

    @Column(name = "participant_name")
    private String participantName;

    @Column(name = "password")
    private String password;

    @Column(name = "praticipant_email")
    private String praticipantEmail;
}
