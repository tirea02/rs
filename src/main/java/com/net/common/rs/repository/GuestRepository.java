package com.net.common.rs.repository;

import com.net.common.rs.entity.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GuestRepository extends JpaRepository<Guest, Long> {
    // You can define custom query methods here if needed
}
