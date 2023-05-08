package com.passionroad.passionroad.repository;

import com.passionroad.passionroad.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> { // <Entity type, PK type>
//    Optional<Member> findByEmail(String email);

    Optional<Member> findByMid(String Mid);
}
