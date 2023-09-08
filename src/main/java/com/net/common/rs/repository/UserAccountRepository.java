package com.net.common.rs.repository;

import com.net.common.rs.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
    // You can add custom query methods here if needed
}
